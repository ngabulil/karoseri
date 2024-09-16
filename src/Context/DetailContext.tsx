import React from "react";
import { getAllMobil } from "../services/Produk mobil";
import { sendMessage } from "../services/Message";
import Cookies from "js-cookie";
import Swal from "sweetalert2";

const DetailContext = React.createContext<any>({});
export const UseDetailContext = () => React.useContext(DetailContext);

const DetailContextProvider = ({ children }: any) => {
  const [detail, setDetail] = React.useState<any>({});
  const [isVisible, setIsVisible] = React.useState(false);
  const [nama, setNama] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [phone, setPhone] = React.useState("");

  const onClose = () => {
    setIsVisible(false);
  };

  const handleSendMessage = async () => {
    try {
      if (Cookies.get("message_cooldown")) {
        throw new Error("Kamu hanya bisa mengirim pesan sekali dalam 1 jam");
      }
      const link_product = location.href;
      await sendMessage({ nama, email, message, phone, link_product });
      Cookies.set("message_cooldown", "true", { expires: 1 / 24 });
      setIsVisible(false);
      Swal.fire("Success", "Pesan terkirim", "success");
      setNama("");
      setEmail("");
      setMessage("");
      setPhone("");
    } catch (error: any) {
      console.log(error);
      if (typeof error === "string") {
        Swal.fire("Oops...", error, "error");
      } else {
        Swal.fire("Oops...", error.message, "error");
      }
    }
  };

  const getDetail = async (id: any) => {
    try {
      const data = await getAllMobil({ id });
      setDetail({
        ...data.data,
        short: data.data.summary,
        recommendedMobil: data?.data?.recommendedMobil.map((item: any) => ({
          ...item,
          img: item.images[0],
        })),
      });
    } catch (error) {
      console.log(error);
    }
  };

  const value = {
    detail,
    setDetail,
    getDetail,
    isVisible,
    setIsVisible,
    handleSendMessage,
    setPhone,
    setNama,
    setEmail,
    setMessage,
    nama,
    email,
    message,
    phone,
    onClose,
  };
  return (
    <DetailContext.Provider value={value}>{children}</DetailContext.Provider>
  );
};
export default DetailContextProvider;

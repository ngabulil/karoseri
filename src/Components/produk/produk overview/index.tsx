import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination} from "swiper/modules";
import { toRupiah } from "../../../helper/numberConvert";
import { useNavigate } from "react-router-dom";

const ProductOverview = () => {
  const data = [
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR49Gd0HkwyMiwHt6K7LnlhOah5SKdiH8A0Iw&usqp=CAU",
      title: "lorem jasdhk ashdasd",
      type: "bus",
      price: 15000,
      id:  1,
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR49Gd0HkwyMiwHt6K7LnlhOah5SKdiH8A0Iw&usqp=CAU",
      title: "lorem jasdhk ashdasd",
      type: "bus",
      price: 15000,
      id:  1,
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR49Gd0HkwyMiwHt6K7LnlhOah5SKdiH8A0Iw&usqp=CAU",
      title: "lorem jasdhk ashdasd",
      type: "bus",
      price: 15000,
      id:  1,
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR49Gd0HkwyMiwHt6K7LnlhOah5SKdiH8A0Iw&usqp=CAU",
      title: "lorem jasdhk ashdasd",
      type: "bus",
      price: 15000,
      id:  1,
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR49Gd0HkwyMiwHt6K7LnlhOah5SKdiH8A0Iw&usqp=CAU",
      title: "lorem jasdhk ashdasd",
      type: "bus",
      price: 15000,
      id:  1,
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR49Gd0HkwyMiwHt6K7LnlhOah5SKdiH8A0Iw&usqp=CAU",
      title: "lorem jasdhk ashdasd",
      type: "bus",
      price: 15000,
      id:  1,
    },
  ];
  const navigate = useNavigate();
  const handleDetail = (id: number, name: string) => {
    const validStr = name.replaceAll(" ", "-");
    navigate(`/produk/detail/${id}/${validStr}`);
  };
  return (
    <div className="bg-slate-200 w-[99.4vw] max-w-[1600px] px-16 py-6 relative left-[-48px] flex flex-col">
      <p className="text-center font-bold text-3xl pb-10 pt-4">Cek Sekarang Juga !</p>
      <div className="flex gap-x-6 items-center">
        <div className="w-[60%]">
          <div className="grid grid-cols-2 gap-6">
            {data.map(({ img, title, price, type, id }) => (
              <div className="flex gap-x-4 bg-white p-4 rounded-lg">
                <div className="flex">
                  <img className="w-24 h-24" src={img} alt="asd" />
                </div>
                <div className="capitalize flex flex-col">
                  <p className="font-bold text-lg cursor-pointer" onClick={() => handleDetail(id, title)}>{title}</p>
                  <p>{type}</p>
                  <p className="mt-auto">{toRupiah(price)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex w-[40%] min-h-[500px] h-full">
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Autoplay, Pagination]}
            className=""
          >
            {data?.map(({img}) => (
              <SwiperSlide>
                <img className="h-full" src={img} alt="" />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default ProductOverview;

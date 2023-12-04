import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination} from "swiper/modules";
import { toRupiah } from "../../../helper/numberConvert";
import { useNavigate } from "react-router-dom";
import React from "react";

interface ProductOverviewProps {
  widthRef: number | undefined,
}

const ProductOverview : React.FC<ProductOverviewProps> = ({ widthRef }) => {
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
    <div className='bg-slate-200 px-16 py-6 relative left-[-48px] flex flex-col sm:px-4 sm:left-[-16px] md:px-6' style={{width: widthRef}}>
      <p className="text-center font-bold text-3xl pb-10 pt-4">Cek Sekarang Juga !</p>
      <div className="flex gap-x-6 items-center sm:gap-y-6 sm:flex-col-reverse md:gap-y-6 md:flex-col-reverse">
        <div className="w-[60%] sm:w-full md:w-full">
          <div className="grid grid-cols-2 gap-6 sm:gap-4">
            {data.map(({ img, title, price, type, id }) => (
              <div className="flex gap-x-4 items-center bg-white p-4 rounded-lg sm:flex-col">
                <div className="flex">
                  <img className="w-24 h-24 sm:w-full sm:h-full" src={img} alt="asd" />
                </div>
                <div className="capitalize flex flex-col h-full sm:mr-auto">
                  <p className="font-bold text-lg cursor-pointer" onClick={() => handleDetail(id, title)}>{title}</p>
                  <p>{type}</p>
                  <p className="mt-auto">{toRupiah(price)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex w-[40%] min-h-[500px] h-full sm:w-full sm:min-h-[300px] md:w-full md:min-h-[400px]">
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
                <img className="h-full w-full" src={img} alt="" />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default ProductOverview;

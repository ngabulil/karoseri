import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { toRupiah } from "../helper/numberConvert";
import ListProduct from "../Components/produk/list produk";
import dataJson from "../data/produk.json";
import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

const DetailProduk = () => {
  const ref = useRef<HTMLDivElement>(null);
  const dataDetail = {
    name: "Mobil Ambulance X Jaguar Limited Edition",
    short: "Lore ipsum asdhkuhasd khasjhd kjhaksjdh ashdg asjhdkasd",
    description: `Lore ipsum asdhkuhasd asdasd khasjhd kjhaksjdh Lore ipsum asdhkuhasd khasjhd kjhaksjdh Lore ipsum asdhkuhasd khasjhd kjhaksjdh Lore ipsum asdhkuhasd khasjhd kjhaksjdh sdadas asdasd Lore ipsum asdhkuhasd khasjhd kjhaksjdh Lore ipsum asdhkuhasd khasjhd kjhaksjdh Lore ipsum asdhkuhasd khasjhd kjhaksjdh 
      
      kahskdjhkajshdjalsdj`,
    type: "Van",
    price: 15000000,
    images: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShXXhXi8tSqF37UM6mMdib-eHb_qb8onTzKA&usqp=CAU",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShXXhXi8tSqF37UM6mMdib-eHb_qb8onTzKA&usqp=CAU",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShXXhXi8tSqF37UM6mMdib-eHb_qb8onTzKA&usqp=CAU",
    ],
  };
  const navigate = useNavigate();
  useEffect(() => {
    const handleScrollToTop = () => {
      window.scrollTo(0, 0);
    };
    handleScrollToTop()

    window.addEventListener('beforeunload', handleScrollToTop);

    // return () => {
    //   window.removeEventListener('beforeunload', handleScrollToTop);
    // };
  }, [navigate]);

  // useEffect(() => {
  //   if (ref.current) {
  //     ref.current.scrollIntoView({ behavior: "smooth" });
  //   }
  // }, [navigate]);
  return (
    <div className="bg-slate-100 py-4" ref={ref}>
      <div className="border-2 p-8 mx-12 bg-white rounded-xl sm:mx-2 sm:p-4">
        <div className="text-[28px] font-bold text-center pb-4">
          Detail Produk
        </div>
        <div>
          <div>
            <div className="text-center font-semibold text-[24px] pb-2 pt-1">
              <p>{dataDetail.name}</p>
            </div>
            <div className="w-3/5 mx-auto sm:w-full md:w-[90%]">
              <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                pagination={{
                  clickable: true,
                }}
                modules={[Autoplay, Pagination]}
                className="mySwiper"
              >
                {dataDetail.images.map((img) => (
                  <SwiperSlide>
                    <img
                      src={img}
                      alt=""
                      className="w-full mx-auto h-[500px] sm:min-h-[300px] sm:h-auto md:max-w-[725px]"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            <div className="flex mx-auto w-3/5 justify-between border-4 px-2 border-slate-500 rounded-md my-4 sm:mx-0 sm:w-full">
              <div className="w-1/3 py-2">
                <p className="font-bold">Harga :</p>
                <p className="font-medium break-words">
                  {toRupiah(dataDetail.price)}
                </p>
              </div>
              <div className="w-1/3 py-2 border-x-4 border-slate-500 border-solid pl-2">
                <p className="font-bold">Tipe :</p>
                <p className="font-medium">{dataDetail.type}</p>
              </div>
              <div className="w-1/3 py-2 pl-2">
                <p className="font-bold">Summary :</p>
                <p className="font-medium break-words">{dataDetail.short}</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="pt-10 pb-4">
            <p className="text-2xl font-bold text-center">Deskripsi Produk</p>
          </div>
          <div className="w-4/5 mx-auto sm:w-full md:w-[90%]">
            <p className="tracking-wide leading-7 wordSpace8 whitespace-pre-wrap">
              {dataDetail.description}
            </p>
          </div>
        </div>
        <div>
          <div className="pt-10 pb-4">
            <p className="text-2xl font-bold text-center">Spesifikasi Produk</p>
          </div>
          <div className="w-4/5 mx-auto sm:w-full md:w-[90%]">
            <p className="tracking-wide leading-7 wordSpace8 whitespace-pre-wrap">
              {dataDetail.description}
            </p>
          </div>
        </div>
        <ListProduct
          data={dataJson.slice(0, 4)}
          label="Jelajahi Pilihan Luar Biasa Kami!"
          title="Produk Lainnya"
        />
      </div>
    </div>
  );
};

export default DetailProduk;

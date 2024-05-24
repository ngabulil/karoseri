import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { toRupiah } from "../../../helper/numberConvert";
import { useNavigate } from "react-router-dom";

const ProductOverview = () => {
  const data = [
    {
      img: "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/vector-cartoon-car-illustration-for-t-shirt-design-template-67a147fc9890aa93ece86a9af6597173_screen.jpg?ts=1681024996",
      title: "lorem jasdhk ashdasd",
      type: "bus",
      price: 15000,
      id: 1,
    },
    {
      img: "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/vector-cartoon-car-illustration-for-t-shirt-design-template-67a147fc9890aa93ece86a9af6597173_screen.jpg?ts=1681024996",
      title: "lorem jasdhk ashdasd",
      type: "bus",
      price: 15000,
      id: 1,
    },
    {
      img: "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/vector-cartoon-car-illustration-for-t-shirt-design-template-67a147fc9890aa93ece86a9af6597173_screen.jpg?ts=1681024996",
      title: "lorem jasdhk ashdasd",
      type: "bus",
      price: 15000,
      id: 1,
    },
    {
      img: "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/vector-cartoon-car-illustration-for-t-shirt-design-template-67a147fc9890aa93ece86a9af6597173_screen.jpg?ts=1681024996",
      title: "lorem jasdhk ashdasd",
      type: "bus",
      price: 15000,
      id: 1,
    },
    {
      img: "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/vector-cartoon-car-illustration-for-t-shirt-design-template-67a147fc9890aa93ece86a9af6597173_screen.jpg?ts=1681024996",
      title: "lorem jasdhk ashdasd",
      type: "bus",
      price: 15000,
      id: 1,
    },
    {
      img: "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/vector-cartoon-car-illustration-for-t-shirt-design-template-67a147fc9890aa93ece86a9af6597173_screen.jpg?ts=1681024996",
      title: "lorem jasdhk ashdasd",
      type: "bus",
      price: 15000,
      id: 1,
    },
  ];
  const navigate = useNavigate();
  const handleDetail = (id: number, name: string) => {
    const validStr = name.replaceAll(" ", "-");
    navigate(`/produk/detail/${id}/${validStr}`);
  };
  return (
    <div className="bg-slate-200">
      <div className="px-12 py-6 max-w-8xl mx-auto relative flex flex-col sm:px-4 md:px-6">
        <p className="text-center font-bold text-3xl pb-10 pt-4">
          Cek Sekarang Juga !
        </p>
        <div className="flex gap-x-12 items-center sm:gap-y-6 sm:flex-col-reverse md:gap-y-6 md:flex-col-reverse">
          <div className="w-[60%] sm:w-full md:w-full">
            <div className="grid grid-cols-2 gap-6 sm:gap-4">
              {data.map(({ img, title, price, type, id }) => (
                <div className="flex gap-x-4 items-center bg-white p-4 rounded-lg sm:flex-col">
                  <div className="flex">
                    <img
                      className="w-24 h-24 sm:w-full sm:h-full"
                      src={img}
                      alt="asd"
                    />
                  </div>
                  <div className="capitalize flex flex-col h-full sm:mr-auto">
                    <p
                      className="font-bold text-lg cursor-pointer"
                      onClick={() => handleDetail(id, title)}
                    >
                      {title}
                    </p>
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
              {data?.map(({ img }) => (
                <SwiperSlide
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <img className="m-auto max-w-[400px]" src={img} alt="" />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductOverview;

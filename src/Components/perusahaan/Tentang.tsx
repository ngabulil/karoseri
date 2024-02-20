import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

const Tentang = () => {
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

  return (
    <div className="w-4/5 mx-auto">
      <div>
        <div>
          <p className="text-center font-bold text-2xl pb-3">
            Profil Perusahaan
          </p>
          <p className="text-justify">
            Selamat datang di Industri Karoseri di Tangerang, perusahaan kami
            PT. Prakarsa Putra bergerak dalam jasa pembuatan karoseri berbagai
            jenis kendaraan dengan range produk yang sangat luas, produk utama
            kami antara lain Truk pemadam kebakaran, Skylift, Mobil Derek,
            Wingbox, dan custom order disesuaikan dengan kebutuhan konsumen.
            Beroperasi sejak tahun 2009, workshop kami telah memproduksi
            berbagai jenis kendaraan kategori mobil khusus. Didukung dengan
            teknisi dan tim yang berpengalaman dalam bidangnya, dan kemampuan
            import langsung spare parts yang perlu didatangkan khusus, maka kami
            yakin bisa memenuhi berbagai kebutuhan konsumen di bidang modifikasi
            kendaraan.
          </p>
        </div>
        <div>
          <p className="text-center font-bold text-2xl pb-3 pt-14">
            Galeri Perusahaan
          </p>
          <div>
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
        </div>
        <div>
          <p className="text-center font-bold text-2xl pb-3 pt-14">
            Kami Melayani
          </p>
        </div>
      </div>
    </div>
  );
};

export default Tentang;

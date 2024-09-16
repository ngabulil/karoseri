import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import DescriptionAndFoto from "../../Components/perusahaan/DescriptionAndFoto";
import useWindowSize from "../../hooks/useWindowSize";
import { arrReduce } from "../../helper/arrayReduce";
import mobilKhusus from "../../assets/mobil-khusus.jpg";
import produksiKaroseri from "../../assets/produksi-karoseri.jpg";
import specialVehicle from "../../assets/special-vehicle.jpg";
import galeri1 from "../../assets/galeri1.jpg";
import galeri2 from "../../assets/galeri2.jpg";
import galeri3 from "../../assets/galeri3.jpg";
import galeri4 from "../../assets/galeri4.jpg";
import galeri5 from "../../assets/galeri5.jpg";
import ZoomImage from "../../Components/ZoomImage/ZoomImage";

const Tentang = () => {
  const [screenWidth] = useWindowSize();

  const dataDetail = {
    img: [galeri1, galeri2, galeri3, galeri4, galeri5],
  };
  const smGaleriPhotos = arrReduce(dataDetail.img, 1);
  const mdGaleriPhotos = arrReduce(dataDetail.img, 2);
  const lgGaleriPhotos = arrReduce(dataDetail.img, 3);
  const screenWidthPhotos =
    screenWidth > 1000
      ? lgGaleriPhotos
      : screenWidth > 600
      ? mdGaleriPhotos
      : smGaleriPhotos;
  const perusahaanDetails = [
    {
      description:
        "Merupakan salah satu fokus perusahaan dimana kami memproduksi secara khusus (custom order) jenis kendaraan yang tidak tersedia umum di pasaran, mulai dari eksterior hingga pengerjaan interiornya. Pemilihan chassis / kendaraan pun disesuaikan dengan permintaan konsumen. Misalnya mobil laboratorium, dimana konsumen bebas menentukan jenis armadanya dan kami akan melakukan pembuatan mulai dari landasan, body, instalasi kelistrikan, dan interior lainnya sesuai kebutuhan pemesan. Perlu diperhatikan untuk rancangannya mengikuti dari layout yang diinginkan konsumen. Selain dari modifikasi unit, kami juga akan memproses perizininannya terkait dengan perubahan bentuk kendaraan hingga dapat dilakukan proses KIR. Semua dokumen harus lengkap dan sesuai perundang-undangan yang ditentukan melalui Kementrian Direktorat Jenderal Perhubungan Darat.",
      fotoLeft: false,
      image: mobilKhusus,
      title: "Industri Karoseri Mobil Khusus",
      subTitle: "Industri Karoseri",
      className: "h-[350px]",
    },
    {
      description: `Untuk bisa mewujudkan permintaan konsumen secara tepat baik bentuk maupun fungsi, maka perlu dilakukan terlebih dahulu perencanaan yang matang dengan pembahasan bersama mulai dari jenis kendaraan yang digunakan, daftar peralatan yang akan diinstall, layout yg disesuaikan dengan ukuran kendaraan, perancangan peralatan pendukung seperti lampu penerangan, instalasi kabel listrik hingga berbagai aspek lainnya dengan mempertimbangkan berbagai aspek berhubungan dengan perizinan. Setelah perencanaan matang, maka dituangkan di dalam gambar / drawing baik 2D ataupun 3D.

Dari gambar awal drawing yang disetujui, akan dikembangkan menjadi gambar yang lebih detil untuk diajukan Rancang Bangun (SKRB) diajukan ke Direktorat Jenderal Perhubungan Darat. Biaya yang dikeluarkan untuk proses perizinan ini cukup besar sehingga akan mempengaruhi total biaya produksi dari karoseri. Selama proses pengajuan, pembuatan karoseri sudah bisa mulai dilakukan. Total dari pengurusan izin dan pembuatan ini bisa memakan waktu yang bervariasi antara 1-3 bulan tergantung dari tingkat kesulitannya.
                  
Setelah proses pembuatan modifikasi kendaraan, maka dilakukan proses pengajuan uji tipe kendaraan (SRUT) dimana unit akan difoto, disurvey untuk diukur, ditimbang dan dicek apakah telah sesuai dengan rancang bangun yang diajukan. Baru setelah proses cek fisik ini SRUT bisa diterbitkan sehingga kendaraan bisa diproses untuk pembuatan STNK dan KIR.`,
      image: produksiKaroseri,
      title: "Proses Produksi Karoseri",
      subTitle: "Proses Karoseri",
      fotoLeft: true,
    },
    {
      title: "Biaya Pembuatan Karoseri Special Purpose Vehicle",
      subTitle: "Biaya Karoseri",
      image: specialVehicle,
      description:
        "Dalam melakukan perhitungan utk pembuatan jenis kendaraan khusus, maka kami akan memperhitungkan berbagai hal mulai dari material yang digunakan, spare parts yang diperlukan, peralatan terpasang, interior, aksesoris pendukung serta biaya perizinan sehingga diperoleh harga yang spesifik. Biaya pembuatan 1 unit kendaraan tentu akan lebih besar dibandingkan dengan langsung beberapa unit, dimana proses perizinannya tentu akan bisa lebih hemat. Untuk informasi lebih lanjut mengenai special purpose vehicle silahkan menghubungi tim marketing kami untuk memperoleh penawaran harga dan informasi lebih lanjut.",
      fotoLeft: false,
      className: "h-[350px]",
    },
  ];

  return (
    <div>
      <div>
        <div className="max-w-8xl mx-auto px-12 sm:p-4 md:w-[90%] sm:w-[90%]">
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
        <div className="max-w-8xl mt-8 mx-auto px-12 sm:p-4 md:w-[90%] sm:w-[90%]">
          <p className="text-center font-bold text-2xl pb-3">
            Sejarah Perusahaan
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
          <p className="text-center font-bold text-2xl pb-3 pt-8">
            Galeri Perusahaan
          </p>
          <div
            className="bg-slate-200 p-12 bg-center sm:p-8"
            style={{
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="max-w-8xl mx-auto">
              <p className="text-center font-bold mb-4 text-xl">
                Foto dan Dokumentasi Tentang Perusahaan Kami
              </p>
              <div className="mx-auto">
                <Swiper
                  spaceBetween={30}
                  centeredSlides={true}
                  autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                  }}
                  pagination={{
                    clickable: true,
                  }}
                  modules={[Autoplay, Pagination]}
                  className="swiper-about-company"
                >
                  {screenWidthPhotos.map((array, arrayIndex) => (
                    <SwiperSlide key={arrayIndex}>
                      <div className="flex gap-4 justify-center">
                        {array.map((item: any, index: number) => (
                          <ZoomImage img={item}>
                            <img
                              key={index}
                              src={item}
                              alt=""
                              className="w-[400px] h-[400px]"
                            />
                          </ZoomImage>
                        ))}
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </div>
        </div>
        <section className="max-w-8xl mx-auto">
          {perusahaanDetails.map((detail, index) => (
            <div
              key={index}
              className="pt-10 px-12 flex justify-between gap-x-10 text-justify items-center"
            >
              <DescriptionAndFoto {...detail} />
            </div>
          ))}
        </section>
      </div>
    </div>
  );
};

export default Tentang;

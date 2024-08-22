import logo from "../assets/logo.png";
import ClientImage from "../Components/homepage/ClientImage";
import ButtonPrimary from "../Components/button/ButtonPrimary";
import ButtonSecond from "../Components/button/ButtonSecond";
import FeatureBox from "../Components/homepage/FeatureBox";
import FeatureCont from "../Components/homepage/FeatureCont";
import { arrReduce } from "../helper/arrayReduce";
import dataTesti from "../data/testimoni.json";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import TestimonialWrapper from "../Components/homepage/TestimonialWrapper";
import Faqs from "../Components/homepage/Faqs";
import faqIcon from "../assets/faq-icon.svg";
import WAme from "../assets/wa.png";
import phone from "../assets/phone.png";
import email from "../assets/email.png";
import setCar from "../assets/517.jpg";
import { arrToArr } from "../helper/arrToArr";
import useWindowSize from "../hooks/useWindowSize";
import {
  CarsSvg,
  ContactUsSvg,
  CustomizedSvg,
  ExperiencedSvg,
  PerBusinessSvg,
  PersonalizedSvg,
  TrustedSvg,
} from "../assets/svg";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const screenWidth = useWindowSize()[0];
  const testiDataMobile = arrToArr(dataTesti) || [];
  const testimoniData = arrReduce(dataTesti, 2) || [];
  const navigate = useNavigate();
  const dataFaq = [
    {
      question: "Bagaimana cara untuk memesan atau membeli produk ini?",
      answer:
        "Untuk memesan atau membeli produk kami, Anda dapat menghubungi kami melalui beberapa saluran komunikasi yang telah kami sediakan. Kirimkan permintaan atau pertanyaan Anda ke email kami, atau hubungi kami melalui WhatsApp untuk mendapatkan informasi cepat. Anda juga dapat menelepon kami untuk berbicara langsung dengan perwakilan kami. Kami akan siap membantu Anda dengan proses pemesanan dan memastikan Anda mendapatkan solusi karoseri yang tepat sesuai kebutuhan Anda.",
    },
    {
      question: "Bagaimana cara membeli langsung produk melalui website?",
      answer:
        "Untuk saat ini kami belum melayani pemesanan secara langsung melalui website, dan hanya melayani pemesanan melalui WhatsApp. Email, telepon, dan media sosial lainnya. Kami akan siap membantu Anda dengan proses pemesanan dan memastikan Anda mendapatkan solusi karoseri yang tepat sesuai kebutuhan Anda.",
    },
    {
      question: "Apakah ada syarat khusus untuk melakukan pemesanan?",
      answer:
        "Kami tidak memiliki syarat khusus untuk melakukan pemesanan. Namun, pastikan Anda memberikan informasi yang akurat dan lengkap mengenai kebutuhan kustomisasi Anda untuk memastikan hasil yang optimal.",
    },
    {
      question: "Berapa lama waktu yang diperlukan untuk menyelesaikan modifikasi atau kustomisasi?",
      answer:
        "Waktu penyelesaian tergantung pada kompleksitas proyek dan jenis modifikasi yang Anda pilih. Kami akan memberikan estimasi waktu pengerjaan saat Anda melakukan pemesanan dan memastikan komunikasi yang jelas sepanjang proses.",
    },
  ];
  return (
    <div>
      <section className="bg-slate-200">
        <div className="flex max-w-8xl mx-auto justify-between items-center px-12 pt-5 pb-8 sm:px-4">
          <div className="flex flex-col justify-center gap-y-5 w-2/5 sm:w-auto">
            <p className="text-4xl font-bold">
              Solusi Karoseri Terdepan untuk Modifikasi dan Kustomisasi Mobil
            </p>
            <div className="sm:!flex sm:justify-center sm:flex-wrap sm:w-full hidden">
              <img
                className="min-w-[280px] max-w-[480px] w-full"
                src={setCar}
                alt=""
              />
            </div>
            <p className="text-base text-justify text-slate-700 sm:text-xl">
              Menghadirkan Inovasi dan Kreativitas dalam Setiap Modifikasi
              Mobil—Solusi Karoseri Terintegrasi untuk Kebutuhan Kustomisasi
              Anda Dari Perencanaan Desain hingga Implementasi Akhir, Kami
              Menyediakan Layanan Kustomisasi Mobil Terbaik dengan Detail yang
              Teliti dan Profesionalisme Tinggi
            </p>
            <div className="flex gap-4 sm:flex-wrap">
              <ButtonPrimary title="Cek Sekarang" click={() => navigate("/produk")} moreStyle="sm:w-full" />
              <ButtonSecond title="Tentang Kami" click={() => navigate("/perusahaan")} moreStyle="sm:w-full" />
            </div>
          </div>
          <div className="flex justify-center w-1/2 sm:hidden">
            <img className="h-96 ml-auto" src={setCar} alt="" />
          </div>
        </div>
      </section>
      <section>
        <div>
          <div className="py-14 max-w-8xl mx-auto flex flex-col sm:px-2">
            <p className="font-bold text-4xl text-center mb-4">Client Kami</p>
            <p className="w-80 text text-center m-auto mb-8 text-slate-700 text-xl sm:w-auto md:w-4/5">
              Perusahaan kami telah banyak bekerja sama dengan beberapa
              perusahaan dan pemerintahan. Profesionalisme dan komitmen kami
              terhadap kualitas menjadikan kami mitra terpercaya.
            </p>
            <Swiper
              loop
              autoplay={{ delay: 0, disableOnInteraction: false }}
              slidesPerView={screenWidth > 600 ? 3 : 2}
              speed={5000}
              grabCursor
              keyboard
              spaceBetween={30}
              className="swiper-company min767:!hidden"
              modules={[Autoplay]}
            >
              <SwiperSlide>
                <ClientImage link={logo} />
              </SwiperSlide>
              <SwiperSlide>
                <ClientImage link={logo} />
              </SwiperSlide>
              <SwiperSlide>
                <ClientImage link={logo} />
              </SwiperSlide>
              <SwiperSlide>
                <ClientImage link={logo} />
              </SwiperSlide>
              <SwiperSlide>
                <ClientImage link={logo} />
              </SwiperSlide>
              <SwiperSlide>
                <ClientImage link={logo} />
              </SwiperSlide>
            </Swiper>
            <div className="grid grid-cols-6 px-28 gap-6 sm:grid-cols-1 sm:hidden xsml:!grid-cols-2 md:px-4 md:grid-cols-3">
              <ClientImage link={logo} />
              <ClientImage link={logo} />
              <ClientImage link={logo} />
              <ClientImage link={logo} />
              <ClientImage link={logo} />
              <ClientImage link={logo} />
            </div>
          </div>
          <div className="bg-slate-200">
            <div className="flex max-w-8xl mx-auto justify-between py-16 px-12 sm:px-4 md:gap-x-6">
              <div className="w-1/2 flex items-center sm:w-full">
                <div>
                  <p className="font-bold text-4xl text-[#303030] pb-2 sm:pb-4 md:pb-4">
                    Kami Menawarkan
                  </p>
                  <div className="hidden sm:!grid sm:grid-cols-2 max540:!grid-cols-1 sm:gap-2 ">
                    <FeatureBox
                      img={PersonalizedSvg}
                      text="Pilih fitur dan desain yang sesuai kebutuhan Anda untuk pengalaman berkendara yang unik"
                      title="Personalisasi"
                      even={false}
                    />
                    <FeatureBox
                      img={CustomizedSvg}
                      text="Ubah mobil Anda sesuai gaya dan keinginan pribadi dengan layanan kustomisasi kami"
                      title="Kustomisasi"
                      even={true}
                    />
                    <FeatureBox
                      img={ExperiencedSvg}
                      text="Kami memiliki tim ahli berpengalaman untuk hasil modifikasi yang berkualitas tinggi"
                      title="Berpengalaman"
                      even={false}
                    />
                    <FeatureBox
                      img={TrustedSvg}
                      text="Kami dikenal sebagai mitra terpercaya dengan layanan memuaskan dan hasil yang sesuai harapan"
                      title="Terpercaya"
                      even={true}
                    />
                  </div>
                  <p className="pb-5 text-slate-600 text-justify sm:text-xl sm:pt-4 md:pt-4">
                    Kami menawarkan solusi karoseri lengkap untuk memenuhi
                    kebutuhan modifikasi dan kustomisasi mobil Anda, dengan
                    fokus pada inovasi, kualitas, dan kepuasan pelanggan. Setiap
                    proyek kami tangani dengan keahlian dan dedikasi untuk hasil
                    yang memuaskan.
                  </p>
                </div>
              </div>
              <div className="flex w-1/2 justify-end sm:hidden">
                <div className="max-w-[759px] flex flex-wrap gap-x-4 justify-end sm:hidden md:grid md:grid-cols-2 md:gap-2">
                  <FeatureBox
                    img={PersonalizedSvg}
                    text="Pilih fitur dan desain yang sesuai kebutuhan Anda untuk pengalaman berkendara yang unik"
                    title="Personalisasi"
                    even={false}
                  />
                  <FeatureBox
                    img={CustomizedSvg}
                    text="Ubah mobil Anda sesuai gaya dan keinginan pribadi dengan layanan kustomisasi kami"
                    title="Kustomisasi"
                    even={true}
                  />
                  <FeatureBox
                    img={ExperiencedSvg}
                    text="Kami memiliki tim ahli berpengalaman untuk hasil modifikasi yang berkualitas tinggi"
                    title="Berpengalaman"
                    even={false}
                  />
                  <FeatureBox
                    img={TrustedSvg}
                    text="Kami dikenal sebagai mitra terpercaya dengan layanan memuaskan dan hasil yang sesuai harapan"
                    title="Terpercaya"
                    even={true}
                  />
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="flex max-w-8xl mx-auto flex-col py-16 px-12 sm:px-4 sm:gap-y-12">
              <FeatureCont
                even={false}
                img={CarsSvg}
                text="Eksplorasi berbagai pilihan inovatif untuk modifikasi dan kustomisasi mobil Anda. Dari desain eksterior yang mencuri perhatian hingga upgrade performa yang mengesankan, temukan solusi yang sesuai dengan kebutuhan, gaya, dan fungsionalitas kendaraan Anda. Kami menghadirkan perubahan yang tidak hanya memperindah tampilan tetapi juga meningkatkan kegunaan dan efisiensi mobil Anda."
                title="Halaman Produk"
                label="Temukan Koleksi Produk Karoseri Terbaik Kami"
                onClick={() => navigate("/produk")}
              />
              <FeatureCont
                even
                img={PerBusinessSvg}
                text="Pelajari lebih lanjut tentang perjalanan kami, nilai-nilai yang kami pegang, dan komitmen kami untuk memberikan layanan karoseri yang tidak hanya berkualitas tetapi juga penuh inovasi dan keahlian. Temukan bagaimana visi dan misi kami membentuk setiap proyek yang kami kerjakan, dan mengapa kami menjadi mitra terpercaya dalam dunia modifikasi dan kustomisasi mobil."
                title="Halaman Perusahaan"
                label="Mengenal Kami Lebih Dekat: Visi, Misi, dan Tentang Kami"
                onClick={() => navigate("/perusahaan")}
              />
              <FeatureCont
                even={false}
                img={ContactUsSvg}
                text="Jangan ragu untuk menghubungi kami dengan pertanyaan, konsultasi, atau untuk mendapatkan penawaran kustom. Tim ahli kami siap memberikan solusi dan dukungan terbaik untuk mewujudkan impian otomotif Anda."
                label="Hubungi Kami untuk Konsultasi dan Penawaran Kustom"
                title="Halaman Hubungi Kami"
                onClick={() => navigate("/contact")}
              />
            </div>
          </div>
          <div className="bg-slate-200">
            <div className="max-w-8xl mx-auto py-10 px-12 sm:px-4">
              <div className="text-center">
                <p className="text-xl">Testimoni</p>
                <p className="text-4xl font-bold pt-6">Kata Mereka Tentang</p>
                <p className="text-4xl font-bold">Produk Kami</p>
              </div>
              <div className="swiper-wrap mt-20">
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
                  {(screenWidth > 1200 ? testimoniData : testiDataMobile).map(
                    (item) => (
                      <SwiperSlide>
                        <TestimonialWrapper data={item} />
                      </SwiperSlide>
                    )
                  )}
                </Swiper>
              </div>
            </div>
          </div>
          <div>
            <div className="px-12 max-w-8xl mx-auto py-14 sm:px-4">
              <div className="text-center pb-10">
                <p className="text-sky-700">FAQ's</p>
                <p className="font-bold text-4xl">
                  Pertanyaan Yang Sering Ditanyakan
                </p>
              </div>
              <div className="flex">
                <div className="w-1/2 gap-y-6 flex flex-col sm:w-full">
                  {dataFaq.map((data) => (
                    <Faqs data={data} />
                  ))}
                </div>
                <div className="w-1/2 sm:hidden">
                  <img src={faqIcon} alt="" />
                </div>
              </div>
              <div className="bg-sky-600 rounded-[40px] flex justify-center text-center py-10 text-white mt-8 sm:px-6">
                <div className="">
                  <p className="text-sm pb-4 text-white">
                    Jika Terdapat Pertanyaan Lebih Lanjut
                  </p>
                  <p className="text-4xl font-bold text-white">
                    Silahkan Hubungi Kami
                  </p>
                  <p className="pt-3 pb-6 text-white">
                    Kamu dapat menghubungi kami melalui beberapa cara
                  </p>
                  <div className="flex flex-col gap-y-3">
                    <a>
                      <img className="h-14 m-auto" src={phone} alt="" />
                    </a>
                    <a>
                      <img className="h-14 m-auto" src={WAme} alt="" />
                    </a>
                    <a>
                      <img className="h-14 m-auto" src={email} alt="" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

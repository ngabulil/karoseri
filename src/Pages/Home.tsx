import logo from "../assets/logo.png";
import ClientImage from "../Components/homepage/ClientImage";
import ButtonPrimary from "../Components/button/ButtonPrimary";
import ButtonSecond from "../Components/button/ButtonSecond";
import FeatureBox from "../Components/homepage/FeatureBox";
import imgFeature from "../assets/Group1.svg";
import FeatureCont from "../Components/homepage/FeatureCont";
import imgCont from "../assets/feature.jpg";
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

const Home = () => {
  const screenWidth = window.innerWidth;
  const testiDataMobile = arrToArr(dataTesti) || [];
  const testimoniData = arrReduce(dataTesti, 2) || [];
  console.log(testiDataMobile);
  const dataFaq = [
    {
      question: "q1. lorem ipsum nani?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur voluptates repellat aspernatur exercitationem delectus saepe adipisci incidunt fugit, tempora a vitae cupiditate. Odio, commodi corporis nisi aut earum delectus voluptatum.",
    },
    {
      question: "q2. lorem ipsum nani?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur voluptates repellat aspernatur exercitationem delectus saepe adipisci incidunt fugit, tempora a vitae cupiditate. Odio, commodi corporis nisi aut earum delectus voluptatum.",
    },
    {
      question: "q3. lorem ipsum nani?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur voluptates repellat aspernatur exercitationem delectus saepe adipisci incidunt fugit, tempora a vitae cupiditate. Odio, commodi corporis nisi aut earum delectus voluptatum.",
    },
    {
      question: "q4. lorem ipsum nani?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur voluptates repellat aspernatur exercitationem delectus saepe adipisci incidunt fugit, tempora a vitae cupiditate. Odio, commodi corporis nisi aut earum delectus voluptatum.",
    },
  ];
  return (
    <div>
      <section className="bg-slate-200">
        <div className="flex max-w-8xl mx-auto justify-between items-center px-12 pt-5 pb-8 sm:px-4">
          <div className="flex flex-col justify-center gap-y-5 w-2/5 sm:w-auto">
            <p className="text-4xl font-bold">
              Awesomeiiiii Digital Agency With Cool Style
            </p>
            <div className="sm:!flex sm:justify-center sm:flex-wrap sm:w-full hidden">
              <img
                className="min-w-[280px] max-w-[480px] w-full"
                src={setCar}
                alt=""
              />
            </div>
            <p className="text-sm text-justify text-slate-700 sm:text-xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
              consectetur explicabo atque, incidunt, at, iusto quae iure animi
              dolore impedit vero ipsum voluptatem amet nostrum laboriosam
              tempore rerum ab. Molestias.
            </p>
            <div className="flex gap-4">
              <ButtonPrimary title="primary" />
              <ButtonSecond title="second" />
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
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor
              officiis sequi cumque nemo libero ratione temporibus maiores nulla
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
                  <div className="sm:!grid sm:grid-cols-1 xsml:!grid-cols-2 sm:gap-2 hidden">
                    <FeatureBox
                      bgImg="bg-red-500"
                      img={imgFeature}
                      text="Lorem asvdj asdjvg asgy ausydg ysd yasdjyygasd asjdg"
                      title="lorem"
                      even={false}
                    />
                    <FeatureBox
                      bgImg="bg-red-500"
                      img={imgFeature}
                      text="Lorem asvdj asdjvg asgy ausydg ysd yasdjyygasd asjdg"
                      title="lorem"
                      even={true}
                    />
                    <FeatureBox
                      bgImg="bg-red-500"
                      img={imgFeature}
                      text="Lorem asvdj asdjvg asgy ausydg ysd yasdjyygasd asjdg"
                      title="lorem"
                      even={false}
                    />
                    <FeatureBox
                      bgImg="bg-red-500"
                      img={imgFeature}
                      text="Lorem asvdj asdjvg asgy ausydg ysd yasdjyygasd asjdg"
                      title="lorem"
                      even={true}
                    />
                  </div>
                  <p className="pb-5 text-slate-600 text-justify sm:text-xl sm:pt-4 md:pt-4">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Beatae architecto aliquam deleniti aliquid sint ullam quia
                    maxime, dolore itaque obcaecati accusamus non in optio
                    possimus inventore nulla dolorem vitae minus?
                  </p>
                </div>
              </div>
              <div className="flex w-1/2 justify-end sm:hidden">
                <div className="max-w-[759px] flex flex-wrap gap-x-4 justify-end sm:hidden md:grid md:grid-cols-2 md:gap-2">
                  <FeatureBox
                    bgImg="bg-red-500"
                    img={imgFeature}
                    text="gigig gemingkajshdkajsdh"
                    title="lorem"
                    even={false}
                  />
                  <FeatureBox
                    bgImg="bg-red-500"
                    img={imgFeature}
                    text="Lorem asvdj asdjvg asgy ausydg ysd yasdjyygasd asjdg"
                    title="lorem"
                    even={true}
                  />
                  <FeatureBox
                    bgImg="bg-red-500"
                    img={imgFeature}
                    text="Lorem asvdj asdjvg asgy ausydg ysd yasdjyygasd asjdg"
                    title="lorem"
                    even={false}
                  />
                  <FeatureBox
                    bgImg="bg-red-500"
                    img={imgFeature}
                    text="Lorem asvdj asdjvg asgy ausydg ysd yasdjyygasd asjdg"
                    title="lorem"
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
                img={imgCont}
                text="ahsvdjasvhd jhasbdjas ashdgasjgd asjdhgajsd sjhgajsd ahdkhdkajhdkjasdhajsdh dhakjhskjdhkajsdhk jdhkahkasjhdkj dk jhdkjhdkajs hdk jah kjhdkjs hkjash kjhk sjhdakdjh"
                title="lorem lorem"
              />
              <FeatureCont
                even
                img={imgCont}
                text="ahsvdjasvhd jhasbdjas ashdgasjgd asjdhgajsd sjhgajsd ahdkhdkajhdkjasdhajsdh dhakjhskjdhkajsdhk jdhkahkasjhdkj dk jhdkjhdkajs hdk jah kjhdkjs hkjash kjhk sjhdakdjh"
                title="lorem lorem"
              />
              <FeatureCont
                even={false}
                img={imgCont}
                text="ahsvdjasvhd jhasbdjas ashdgasjgd asjdhgajsd sjhgajsd ahdkhdkajhdkjasdhajsdh dhakjhskjdhkajsdhk jdhkahkasjhdkj dk jhdkjhdkajs hdk jah kjhdkjs hkjash kjhk sjhdakdjh"
                title="lorem lorem"
              />
            </div>
          </div>
          <div className="bg-slate-200">
            <div className="max-w-8xl mx-auto py-10 px-12 sm:px-4">
              <div className="text-center">
                <p className="text-xl">Testimoni</p>
                <p className="text-4xl font-bold pt-6">
                  Yang Mereka Fikirkan Tentang
                </p>
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
                <p className="text-sky-700 text-sm">FAQ's</p>
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
              <div className="bg-sky-600 rounded-[40px] flex justify-center text-center py-10 text-white mt-8">
                <div className="">
                  <p className="text-sm pb-4">
                    Jika Terdapat Pertanyaan Lebih Lanjut
                  </p>
                  <p className="text-4xl font-bold">Silahkan Hubungi Kami</p>
                  <p className="py-3">
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

import React from "react";
import headerImg from "../assets/industri-karoseri.jpg";
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
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import TestimonialWrapper from "../Components/homepage/TestimonialWrapper";
import Faqs from "../Components/homepage/Faqs";
import faqIcon from "../assets/faq-icon.svg"
import WAme from "../assets/wa.png"
import phone from "../assets/phone.png"
import email from "../assets/email.png"

const Home = () => {
  const testimoniData = arrReduce(dataTesti);
  const dataFaq = [
    {
      question: "q1. lorem ipsum nani?",
      answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur voluptates repellat aspernatur exercitationem delectus saepe adipisci incidunt fugit, tempora a vitae cupiditate. Odio, commodi corporis nisi aut earum delectus voluptatum."
    },
    {
      question: "q2. lorem ipsum nani?",
      answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur voluptates repellat aspernatur exercitationem delectus saepe adipisci incidunt fugit, tempora a vitae cupiditate. Odio, commodi corporis nisi aut earum delectus voluptatum."
    },
    {
      question: "q3. lorem ipsum nani?",
      answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur voluptates repellat aspernatur exercitationem delectus saepe adipisci incidunt fugit, tempora a vitae cupiditate. Odio, commodi corporis nisi aut earum delectus voluptatum."
    },
    {
      question: "q4. lorem ipsum nani?",
      answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur voluptates repellat aspernatur exercitationem delectus saepe adipisci incidunt fugit, tempora a vitae cupiditate. Odio, commodi corporis nisi aut earum delectus voluptatum."
    },
  ]
  return (
    <div>
      <header>
        <div className="bg-slate-100">
          <div className="flex justify-between items-center px-12 pt-5 pb-8">
            <div className="flex flex-col justify-center gap-y-5 w-2/5">
              <p className="text-3xl font-bold">
                Awesome Digital Agency With Cool Style
              </p>
              <p className="text-sm text-justify">
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
            <div className="flex justify-center w-1/2">
              <img className="h-96" src={headerImg} alt="" />
            </div>
          </div>
        </div>
      </header>
      <main>
        <div>
          <div className="py-14 flex flex-col bg-s">
            <p className="font-bold text-2xl text-center mb-4">Client Kami</p>
            <p className="w-80 text text-center m-auto mb-8">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor
              officiis sequi cumque nemo libero ratione temporibus maiores nulla
            </p>
            <div className="grid grid-cols-6 px-28 gap-6">
              <ClientImage link={logo} />
              <ClientImage link={logo} />
              <ClientImage link={logo} />
              <ClientImage link={logo} />
              <ClientImage link={logo} />
              <ClientImage link={logo} />
            </div>
          </div>
          <div className="flex bg-slate-100 justify-between py-16 px-12">
            <div className="w-1/2 flex items-center">
              <div>
                <p className="font-bold text-4xl text-[#303030] pb-2">
                  Kami Menawarkan
                </p>
                <p className="pb-5">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Beatae architecto aliquam deleniti aliquid sint ullam quia
                  maxime, dolore itaque obcaecati accusamus non in optio
                  possimus inventore nulla dolorem vitae minus?
                </p>
                <ButtonPrimary title="asdasd" />
              </div>
            </div>
            <div className="w-1/2 flex flex-wrap gap-x-4 justify-end">
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
          </div>
          <div className="py-16 px-12">
            <div>
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
          <div className="bg-slate-100 py-10 px-12">
            <div>
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
                  navigation={true}
                  modules={[Autoplay, Pagination, Navigation]}
                  className="mySwiper"
                >
                  {testimoniData && testimoniData.map((item) => (
                    <SwiperSlide>
                      <TestimonialWrapper data={item} />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </div>
          <div className="px-12 py-14">
            <div className="text-center pb-10">
                <p className="text-sky-700 text-sm">FAQ's</p>
                <p className="font-bold text-4xl">Pertanyaan Yang Sering Ditanyakan</p>
            </div>
            <div className="flex">
              <div className="w-1/2 gap-y-6 flex flex-col">
                {dataFaq.map((data) => (
                  <Faqs data={data} />
                ))}
              </div>
              <div className="w-1/2">
                <img src={faqIcon} alt="" />
              </div>
            </div>
            <div className="bg-sky-600 rounded-[40px] flex justify-center text-center py-10 text-white mt-8">
              <div className="">
                <p className="text-sm pb-4">
                  Jika Terdapat Pertanyaan Lebih Lanjut
                </p>
                <p className="text-4xl font-bold">
                  Silahkan Hubungi Kami
                </p>
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
      </main>
    </div>
  );
};

export default Home;

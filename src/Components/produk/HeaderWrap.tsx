import setCar from "../../assets/517.jpg";

const HeaderWrap = () => {
  return (
    <div className="bg-slate-200">
      <div className="flex max-w-8xl mx-auto justify-between items-center px-12 pt-5 pb-8 sm:px-4">
        <div className="flex flex-col justify-center gap-y-5 w-2/5 sm:w-auto">
          <p className="text-4xl font-bold">Eksplorasi Produk Karoseri Mobil</p>
          <div className="sm:!flex sm:justify-center sm:flex-wrap sm:w-full hidden">
            <img
              className="min-w-[280px] max-w-[480px] w-full"
              src={setCar}
              alt=""
            />
          </div>
          <p className="text-justify text-slate-700 sm:text-xl">
            Lihat Koleksi Lengkap Karoseri Mobil yang Kami Tawarkan, Dengan
            Beragam Pilihan Desain dan Fitur yang Menonjol. Dapatkan Informasi
            Mendetail tentang Setiap Produk, Termasuk Spesifikasi dan
            Keunggulan, dan Temukan Solusi Karoseri yang Paling Sesuai dengan
            Kebutuhan dan Preferensi Anda
          </p>
          {/* <div className="flex gap-4">
            <ButtonPrimary title="primary" />
            <ButtonSecond title="second" />
          </div> */}
        </div>
        <div className="flex justify-center w-1/2 sm:hidden">
          <img className="h-96 ml-auto" src={setCar} alt="" />
        </div>
      </div>
    </div>
  );
};

export default HeaderWrap;

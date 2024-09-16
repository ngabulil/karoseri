import { VisiSvg, MisiSvg } from "../../assets/svg"

const Visi = () => {
  const visi = [
    "Menjadi Pemimpin Nasional: Menjadi penyedia solusi karoseri mobil terdepan di Indonesia.",
    "Inovasi Terdepan: Menghadirkan desain dan teknologi karoseri yang paling inovatif di pasar lokal.",
    "Kualitas Terbaik: Menyediakan produk dengan standar kualitas tertinggi yang diakui di seluruh negeri.",
    "Kepuasan Pelanggan: Menyediakan pengalaman pelanggan yang luar biasa dengan layanan yang responsif dan dukungan yang memadai."
  ];
  
  const misi = [
    "Inovasi Berkelanjutan: Mengembangkan solusi karoseri yang inovatif sesuai dengan kebutuhan pasar Indonesia.",
    "Kualitas Unggul: Menjamin setiap produk memenuhi standar kualitas tertinggi dan menggunakan bahan berkualitas.",
    "Layanan Pelanggan Prima: Memberikan layanan pelanggan yang cepat, efektif, dan dukungan teknis yang memuaskan.",
    "Keberlanjutan: Mengadopsi praktik ramah lingkungan dalam proses produksi dan operasional untuk mendukung keberlanjutan.",
    "Kemitraan Jangka Panjang: Membangun hubungan yang kuat dan saling menguntungkan dengan pelanggan dan pemasok di seluruh Indonesia."
  ];
  return (
    <div>
      <div className="max-w-8xl mx-auto px-12 mb-8 sm:px-4">
        <h2 className="text-3xl font-bold text-center mb-6">Visi Dan Misi Perusahaan</h2>
        <div className="flex gap-8 sm:flex-col">
          <div className="w-1/2 border rounded-3xl p-8 bg-[rgb(25,148,179)] text-white font-medium sm:w-full">
            <div>
              <p className="text-center text-sky-200 font-bold text-2xl">Visi</p>
            </div>
            <div className="flex justify-center pb-3">
              <MisiSvg width={220} />
            </div>
            <div className="text-justify ml-[20px]">
              <ul className="list-disc flex flex-col gap-4">
                {visi.map((item) => (
                  <li className="marker:text-xl">{item}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="w-1/2 border rounded-3xl p-8 bg-[rgb(63,195,216)] text-white font-medium sm:w-full">
            <div>
              <p className="text-center text-blue-900 font-bold text-2xl">Misi</p>
            </div>
            <div className="flex justify-center">
              <VisiSvg width={200} />
            </div>
            <div className="text-justify ml-[20px]">
              <ul className="list-disc flex flex-col gap-4">
                {misi.map((item) => (
                  <li className="marker:text-xl">{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Visi
import LogoWrap from "./LogoWrap";
import FooterList from "./FooterList";
import LottieFooter from "./LottieFooter";

const Footer = () => {
  const homeFooter = [
    "Karoseri",
    "Home",
    "Product",
    "Tentang Perusahaan",
    "Hubungi Kami",
  ];
  const perushaanFooter = [
    "Perushaan",
    "Profil Perusahaan",
    "Prestasi",
    "Visi dan Misi",
  ];
  const productFooter = ["Produk", "Mobil", "Truk", "Ambulance"];
  const contactFooter = ["Hubungi Kami", "WhatsAPP", "Email", "No. Telepon"];

  return (
    <footer>
      <div className="px-12 py-10 bg-slate-200 sm:px-4">
        <div className="flex gap-x-12 justify-center sm:flex-col sm:gap-y-12 md:grid md:grid-cols-2">
          <LogoWrap />
          <div className="grid xsml:grid-cols-2 gap-y-6 md:grid md:grid-cols-2">
            <FooterList data={homeFooter} />
            <FooterList data={perushaanFooter} />
            <FooterList data={productFooter} />
            <FooterList data={contactFooter} />
          </div>
          <div className="md:w-0 md:h-0 md:relative">
          <LottieFooter />
          </div>
        </div>
      </div>
      <div className="text-center py-2 bg-slate-600 text-white text-sm">
        <p>© 2023 Karoseri, Company Profile</p>
      </div>
    </footer>
  );
};

export default Footer;

import BoxPreview from "../Components/perusahaan/BoxPreview";
import { AboutSvg, GroupSvg, VisionSvg } from "../assets/svg";
import ButtonPrimary from "../Components/button/ButtonPrimary";
import { Outlet, useNavigate } from "react-router-dom";
import useWindowSize from "../hooks/useWindowSize";

const Perusahaan = () => {
  const navigate = useNavigate();
  const [, screenHeight] = useWindowSize();
  const navigateToContent = () => {
    const element = document.getElementById("content-perusahaan");
    window.scrollTo({
      behavior: "smooth",
      top: element?.offsetTop,
    });
  };
  const data = [
    {
      label: "Profil Perusahaan",
      title: "Tentang Kami",
      svgIcon: <AboutSvg />,
      onClick: () => navigate("/perusahaan"),
      path: "/perusahaan",
    },
    {
      label: "Visi dan Misi Perusahaan",
      title: "Visi & Misi",
      svgIcon: <VisionSvg />,
      onClick: () => navigate("visi-misi"),
      path: "/perusahaan/visi-misi",
    },
    {
      label: "Struktur Perusahaan",
      title: "Struktur Organisasi",
      svgIcon: <GroupSvg />,
      onClick: () => navigate("struktur"),
      path: "/perusahaan/struktur",
    },
  ];
  // const dataComponent = [
  //   {
  //     title: "Tentang Perusahaan",
  //     onClick: () => navigate("/perusahaan"),
  //   },
  //   {
  //     title: "Visi dan Misi Perusahaan",
  //     onClick: () => navigate("visi-misi"),
  //   },
  //   {
  //     title: "Struktur Perusahaan",
  //     onClick: () => navigate("struktur"),
  //   }
  // ]

  return (
    <div>
      <div>
        <div className="relative">
          <div
            style={{ height: screenHeight - 80 }}
            className="w-full bg-perusahaan-galeri bg-no-repeat bg-cover bg-center"
          >
            <div className="bg-black opacity-50 h-full"></div>
            {/* <img
              className={`w-full`}
              style={{ height: screenHeight - 80 }}
              src="https://wallpapers.com/images/hd/winter-streets-full-screen-hd-desktop-1q0dygcf3sty40ef.jpg"
              alt=""
            /> */}
          </div>
          <div className="absolute top-[50%] left-[50%] -translate-y-1/2 -translate-x-1/2 max1000:w-4/5">
            <div className="flex flex-col gap-6">
              <div>
                <p className="font-bold text-5xl text-white">
                  PT. Prakarsa Putra Karoseri
                </p>
              </div>
              <div>
                <p className="font-semibold text-xl text-white">
                  Memperkenalkan perusahaan dan dedikasi kami untuk desain
                  karoseri berkualitas tinggi
                </p>
              </div>
              <div className="flex gap-4">
                <ButtonPrimary title="Cek Sekarang" click={navigateToContent} />
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <div>
            <div className="flex w-fit gap-6 flex-wrap max-w-[1400px] justify-center py-4 px-10 rounded-md border-2 mx-auto -mt-24 bg-slate-200 relative max600:mt-0 max600:px-4 max600:w-full">
              <BoxPreview data={data} />
            </div>
          </div>
        </div>
        <div className="pt-8" id="content-perusahaan">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Perusahaan;

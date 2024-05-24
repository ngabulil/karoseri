import { useState } from "react";
import BoxPreview from "../Components/perusahaan/BoxPreview";
import { CuacaSvg } from "../assets/svg";
import ButtonPrimary from "../Components/button/ButtonPrimary";
import ButtonSecond from "../Components/button/ButtonSecond";
import Tentang from "./Perusahaan/Tentang";
import Visi from "./Perusahaan/Visi";
import MainComponent from "../Components/perusahaan/MainComponent";
import Struktur from "./Perusahaan/Struktur";
import { Outlet, useNavigate } from "react-router-dom";
import useWindowSize from "../hooks/useWindowSize";

const Perusahaan = () => {
  const navigate = useNavigate();
  const [_, screenHeight] = useWindowSize();
  const data = [
    {
      label: "Profil Perusahaan",
      title: "Tentang Kami",
      svgIcon: <CuacaSvg />,
      onClick: () => navigate("/perusahaan"),
      path: "/perusahaan"
    },
    {
      label: "Visi dan Misi Perusahaan",
      title: "Visi & Misi",
      svgIcon: <CuacaSvg />,
      onClick: () => navigate("visi-misi"),
      path: "/perusahaan/visi-misi"
    },
    {
      label: "Struktur Perusahaan",
      title: "Struktur Organisasi",
      svgIcon: <CuacaSvg />,
      onClick: () => navigate("struktur"),
      path: "/perusahaan/struktur"
    },
  ];
  const dataComponent = [
    {
      title: "Tentang Perusahaan",
      onClick: () => navigate("/perusahaan"),
    },
    {
      title: "Visi dan Misi Perusahaan",
      onClick: () => navigate("visi-misi"),
    },
    {
      title: "Struktur Perusahaan",
      onClick: () => navigate("struktur"),
    }
  ]
  console.log(12312)

  return (
    <div>
      <div>
        <div className="relative">
          <div style={{ height: screenHeight - 80 }} className="w-full bg-perusahaan-galeri bg-no-repeat bg-cover bg-center">
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
                  The Most Targetted Factory Template For Your Siteeeee
                </p>
              </div>
              <div>
                <p className="font-semibold text-xl text-white">
                  The Most Targetted Factory Template For Your Site Please Wait
                  Now Were Trading
                </p>
              </div>
              <div className="flex gap-4">
                <ButtonPrimary title="Click Now" />
                <ButtonSecond title="CLick sec" />
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
        <div className="pt-8">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Perusahaan;
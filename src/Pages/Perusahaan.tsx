import React, { useState } from "react";
import BoxPreview from "../Components/perusahaan/BoxPreview";
import { CuacaSvg } from "../assets/svg";
import ButtonPrimary from "../Components/button/ButtonPrimary";
import ButtonSecond from "../Components/button/ButtonSecond";
import Tentang from "../Components/perusahaan/Tentang";
import Visi from "../Components/perusahaan/Visi";
import MainComponent from "../Components/perusahaan/MainComponent";
import Struktur from "../Components/perusahaan/Struktur";

const Perusahaan = () => {
  const data = [
    {
      label: "Profil Perusahaan",
      title: "Tentang Kami",
      svgIcon: <CuacaSvg />,
      path: 1,
    },
    {
      label: "Visi dan Misi Perusahaan",
      title: "Visi & Misi",
      svgIcon: <CuacaSvg />,
      path: 2,
    },
    {
      label: "Struktur Perusahaan",
      title: "Struktur Organisasi",
      svgIcon: <CuacaSvg />,
      path: 3,
    },
  ];
  const dataComponent = [
    {
      title: "Tentang Perusahaan",
      component: <Tentang />,
      pathKey: 1,
    },
    {
      title: "Visi dan Misi Perusahaan",
      component: <Visi />,
      pathKey: 2,
    },
    {
      title: "Struktur Perusahaan",
      component: <Struktur />,
      pathKey: 3,
    }
  ]
  const [pathNow, setPathNow] = useState<number>(data[0].path)
  console.log(12312)

  return (
    <div>
      <div>
        <div className="relative">
          <div>
            <img
              className="max-h-[93vh] w-full"
              src="https://wallpapers.com/images/hd/winter-streets-full-screen-hd-desktop-1q0dygcf3sty40ef.jpg"
              alt=""
            />
          </div>
          <div className="absolute top-[50%] left-[50%] -translate-y-1/2 -translate-x-1/2">
            <div className="flex flex-col gap-6">
              <div>
                <p className="font-bold text-5xl text-white">
                  The Most Targetted Factory Template For Your Site
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
            <div className="flex w-fit gap-6 flex-wrap max-w-[1400px] justify-center py-4 px-10 rounded-md border-2 mx-auto -mt-24 bg-white relative">
              <BoxPreview pathNow={pathNow} data={data} onClick={setPathNow} />
            </div>
          </div>
        </div>
        <div className="pt-8">
          <MainComponent data={dataComponent} pathNow={pathNow} />
        </div>
      </div>
    </div>
  );
};

export default Perusahaan;

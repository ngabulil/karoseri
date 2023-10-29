import React from "react";
import ButtonPrimary from "../button/ButtonPrimary";

interface FeatureContProps {
  img: string;
  title: string;
  even: boolean;
  text: string;
}

const FeatureCont: React.FC<FeatureContProps> = ({
  even,
  img,
  text,
  title,
}) => {
  return (
    <div className="flex justify-between items-center md:gap-x-6">
      <div className={`${even ? "order-2" : "order-1"} w-1/2 sm:hidden`}>
        <img className={`w-[600px] ${even && "ml-auto"}`} src={img} alt="" />
      </div>
      <div
        className={`${
          even ? "order-1 text-left" : "order-2 text-right sm:text-left"
        } flex flex-col w-1/2 sm:w-full`}
      >
        <p className="text-sm text-sky-600 pb-3">{title}</p>
        <p className="text-4xl font-bold pb-3">{title}</p>
        <p className="text-4xl font-bold pb-3">{title}</p>
        <div className={`w-full justify-center hidden sm:!flex `}>
          <img className={`w-full max-w-[416px]`} src={img} alt="" />
        </div>
        <p className="pb-6 pt-2 text-slate-600 text-justify break-words sm:text-xl">
          {text}
        </p>
        <ButtonPrimary title="akshd" />
      </div>
    </div>
  );
};

export default FeatureCont;

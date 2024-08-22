import React from "react";
import ButtonPrimary from "../button/ButtonPrimary";

interface FeatureContProps {
  img: string | React.FC<React.SVGProps<SVGSVGElement>>;
  title: string;
  even: boolean;
  text: string;
  label: string;
  onClick: () => void;
}

const FeatureCont: React.FC<FeatureContProps> = ({
  even,
  img: Image,
  text,
  title,
  label,
  onClick,
}) => {
  return (
    <div className="flex justify-between items-center md:gap-x-6">
      <div className={`${even ? "order-2" : "order-1"} w-1/2 sm:hidden`}>
        {/* <img className={`w-[600px] ${even && "ml-auto"}`} src={img} alt="" /> */}
        <Image className={`w-[600px] max-w-full max-h-[465px] ${even && "ml-auto"}`} />
      </div>
      <div
        className={`${
          even ? "order-1 text-left" : "order-2 text-right sm:text-left"
        } flex flex-col w-1/2 sm:w-full`}
      >
        <p className="text-sky-600 pb-3">{title}</p>
        <p className="text-4xl font-bold pb-3">{label}</p>
        <div className={`w-full justify-center hidden sm:!flex `}>
          {/* <img className={`w-full max-w-[416px]`} src={img} alt="" /> */}
          <Image className={`w-full max-w-[416px]`} />
        </div>
        <p className="pb-6 pt-2 text-slate-600 text-justify break-words sm:text-xl">
          {text}
        </p>
        <ButtonPrimary title="Selengkapnya" click={onClick} />
      </div>
    </div>
  );
};

export default FeatureCont;

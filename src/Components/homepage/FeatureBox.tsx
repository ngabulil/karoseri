import React from "react";

interface FeatureBoxProp {
  img: string | React.FC<React.SVGProps<SVGSVGElement>>;
  title: string;
  text: string;
  even?: boolean;
}

const FeatureBox: React.FC<FeatureBoxProp> = ({
  img: Image,
  title,
  text,
  even,
}) => {
  return (
    <div
      className={`${
        even ? "mt-4" : "mb-4 xsml:!ml-auto md:ml-auto"
      } p-4 w-[250px] border-2 border-solid max-w-full rounded-2xl bg-white sm:my-0 md:my-0 sm:mx-auto min540-max767:!mx-0 max540:w-[300px]`}
    >
      {/* <div className={`${bgImg} p-3 w-fit rounded-md mb-4`}>
            <img className='' src={img} alt="feture" />
        </div> */}
      <div className="h-[85px] relative">
        <Image className="scale-[0.15] absolute top-[-253%] left-[-100%] max540:left-[-80%]" />
      </div>
      <div className="mb-1">
        <p className="font-bold text-2xl text-slate-800">{title}</p>
      </div>
      <div className="text-slate-600">{text}</div>
    </div>
  );
};

export default FeatureBox;

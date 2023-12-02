import React, { FC, SVGProps } from "react";

interface FeatureProductProps {
  ImgSvg: FC<SVGProps<SVGSVGElement>>;
  title: string;
  label: string;
}

const FeatureProduct: React.FC<FeatureProductProps> = ({
  ImgSvg,
  label,
  title,
}) => {
  return (
    <div>
      <div className="text-center flex flex-col gap-y-5">
        <div className="flex justify-center">
          <div className="flex justify-center p-4 bg-slate-100 rounded-lg">
            <ImgSvg fill="indigo" width={60} height={60} />
          </div>
        </div>
        <div>
          <p className="text-xl font-bold">{title}</p>
        </div>
        <div>
          <p className="text-sm text-justify">{label}</p>
        </div>
      </div>
    </div>
  );
};

export default FeatureProduct;

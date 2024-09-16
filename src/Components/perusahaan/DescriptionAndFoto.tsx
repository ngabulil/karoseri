import React from "react";

interface DescriptionAndFotoProps {
    title: string;
    subTitle: string;
    description: string;
    image: string;
    fotoLeft: boolean;
    className?: string
}

const DescriptionAndFoto: React.FC<DescriptionAndFotoProps> = ({ description, image, subTitle, title, fotoLeft, className }) => {

  return (
    <div>
      <div className="flex flex-col gap-y-3 mb-8">
        <div>
          <p className={`text-sm text-sky-500 font-medium pb-2 ${fotoLeft ? "text-right" : "text-left"} sm:text-center`}>
            {subTitle}
          </p>
          <h2 className={`font-bold text-2xl ${fotoLeft ? "text-right" : "text-left"} sm:text-center`}>{title}</h2>
        </div>
        <div>
          <div className={`w-[40%] ${fotoLeft ? "float-left mr-7" : "float-right ml-7"} smDown:w-1/2 sm:!w-4/5 sm:float-none sm:mx-auto sm:mb-3`}>
            <div className="relative w-full">
              <img
                className={`w-[90%] rounded-md mx-auto relative ${className}`}
                src={image}
                alt=""
              />
              <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-4 border-sky-600 w-full h-[80%]" />
            </div>
          </div>
          <pre className="whitespace-pre-wrap">
          {description}
          </pre>
        </div>
      </div>
    </div>
  );
};

export default DescriptionAndFoto;

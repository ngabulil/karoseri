import React from 'react';
import { useLocation } from 'react-router-dom';

interface BoxPreviewProps {
  data: {
    svgIcon: React.ReactElement;
    title: string;
    label: string;
    onClick: () => void;
    path: string;
  }[];
}

const BoxPreview: React.FC<BoxPreviewProps> = ({ data }) => {
  const { pathname } = useLocation();
  return (
    <>
      {data.map(({ svgIcon, title, label, onClick, path }, index) => (
        <div onClick={onClick} className={`drop-shadow-xl shadow-xl text-center flex flex-col gap-2 w-[30%] max-w-[400px] p-2 border-2 ${path === pathname ? "bg-slate-300" : "bg-white"} rounded-md cursor-pointer max600:w-full `} key={index}>
          <div className='w-full h-16 flex justify-center'>
            {svgIcon}
          </div>
          <div>
            <p className={`font-bold text-lg ${path === pathname ? "text-black" : "text-slate-600"}`}>{title}</p>
            <p className={`${path === pathname ? "text-black font-medium" : "text-slate-600"}`}>{label}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default BoxPreview;

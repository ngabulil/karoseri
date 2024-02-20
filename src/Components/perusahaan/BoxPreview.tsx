/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';

interface BoxPreviewProps {
  data: {
    svgIcon: React.ReactElement;
    title: string;
    label: string;
    path: number;
  }[];
  pathNow: number;
  onClick: any;
}

const BoxPreview: React.FC<BoxPreviewProps> = ({ data, pathNow, onClick }) => {
  return (
    <>
      {data.map(({ svgIcon, title, label, path }, index) => (
        <div onClick={() => onClick(path)} className={`text-center flex flex-col gap-2 w-[30%] max-w-[400px] p-2 border-2 ${path === pathNow ? "bg-slate-100" : "bg-white"} rounded-md cursor-pointer`} key={index}>
          <div className='w-full h-16 flex justify-center'>
            {svgIcon}
          </div>
          <div>
            <p className='font-bold text-lg'>{title}</p>
            <p>{label}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default BoxPreview;

import React, { useState } from "react";
import { AiOutlineRight, AiOutlineDown } from "react-icons/ai";

interface faqsProps {
  data: {
    question: string;
    answer: string;
  };
}

const Faqs: React.FC<faqsProps> = ({ data }) => {
  const [isClick, setIsClick] = useState(false);

  const handleClick = () => {
    setIsClick(!isClick);
  };
  return (
    <div
      className={`flex flex-col p-8 border-2 border-slate-400 cursor-default rounded-3xl overflow-hidden sm:py-5`}
      onClick={handleClick}
    >
      <div className="flex items-center justify-between gap-4 sm:my-auto">
        <p className="font-bold text-xl">{data.question}</p>
        <div className="h-7 w-7 flex items-center">
          {!isClick ? <AiOutlineRight /> : <AiOutlineDown />}
        </div>
      </div>
      <div className={`${!isClick && 'hidden'} pt-6`}>
        <p className="text-slate-500">{data.answer}</p>
      </div>
    </div>
  );
};

export default Faqs;

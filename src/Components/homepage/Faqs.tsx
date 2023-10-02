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
      className={`p-8 border-2 border-slate-400 rounded-3xl ${
        isClick ? "h-auto" : "h-[90px]"
      } overflow-hidden`}
    >
      <div className="flex items-center pb-6 justify-between">
        <p className="font-bold text-xl">{data.question}</p>
        <div className="h-7 w-7 flex items-center" onClick={handleClick}>{
            !isClick ? <AiOutlineRight /> : <AiOutlineDown />
        }</div>
      </div>
      <div>
        <p className="text-slate-500">{data.answer}</p>
      </div>
    </div>
  );
};

export default Faqs;

import React from "react";
import { buttonProp } from "../../Interface/Button";

const ButtonPrimary: React.FC<buttonProp> = ({title, click, moreStyle }) => {
  return (
    <div className={`flex ${moreStyle}`}>
      <button onClick={click} className={`mt-auto bg-[rgb(11,137,244)] mx-auto w-32 h-10 rounded-lg text-sm text-white hover:opacity-80 sm:text-xl sm:w-full sm:px-3 sm:py-2 sm:h-auto`}>
        {title}
      </button>
    </div>
  );
};

export default ButtonPrimary;

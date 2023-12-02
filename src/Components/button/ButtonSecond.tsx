import React from "react";
import { buttonProp } from "../../Interface/Button";

const ButtonSecond: React.FC<buttonProp> = ({title, click}) => {
  return (
    <div>
      <button onClick={click} className="text-[rgb(11,137,244)] w-32 h-10 rounded-lg text-sm bg-white shadow-md border border-sky-500 hover:bg-[rgb(11,137,244)] hover:text-white sm:text-xl sm:h-12">
        {title}
      </button>
    </div>
  );
};

export default ButtonSecond;

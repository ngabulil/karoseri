import React from "react";
import { buttonProp } from "../../Interface/Button";

const ButtonSecond: React.FC<buttonProp> = ({title}) => {
  return (
    <div>
      <button className="text-[rgb(11,137,244)] w-32 h-10 rounded-lg text-sm bg-white hover:bg-[rgb(11,137,244)] hover:text-white shadow-md border border-sky-500">
        {title}
      </button>
    </div>
  );
};

export default ButtonSecond;

import React from "react";
import { buttonProp } from "../../Interface/Button";

const ButtonSecond: React.FC<buttonProp> = ({title}) => {
  return (
    <div>
      <button className="text-[rgb(11,137,244)] w-32 h-8 rounded-lg text-sm bg-white">
        {title}
      </button>
    </div>
  );
};

export default ButtonSecond;

import React from "react";
import { buttonProp } from "../../Interface/Button";

const ButtonPrimary: React.FC<buttonProp> = ({title}) => {
  return (
    <div>
      <button className="bg-[rgb(11,137,244)] w-32 h-8 rounded-lg text-sm text-white">
        {title}
      </button>
    </div>
  );
};

export default ButtonPrimary;

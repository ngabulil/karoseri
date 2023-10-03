import React from "react";
import { buttonProp } from "../../Interface/Button";

const ButtonPrimary: React.FC<buttonProp> = ({title}) => {
  return (
    <div>
      <button className="bg-[rgb(11,137,244)] w-32 h-10 rounded-lg text-sm text-white hover:opacity-80">
        {title}
      </button>
    </div>
  );
};

export default ButtonPrimary;

/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";

interface ValidasiLanjutProps {
  text: string;
  click: any;
  isOpen: any;
  onClose: any;
}

const ValidasiLanjut: React.FC<ValidasiLanjutProps> = ({
  text,
  click,
  isOpen,
  onClose
}) => {
  const handleOpen = () => {
    onClose()
    click();
  };
  return (
    <>
      {isOpen && (
        <div>
          <p>{text}</p>
          <div onClick={handleOpen}>lanjut</div>
          <div onClick={onClose}>close</div>
        </div>
      )}
    </>
  );
};

export default ValidasiLanjut;

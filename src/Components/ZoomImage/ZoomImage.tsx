import React from "react";
import ReactDOM from "react-dom";
import useWindowSize from "../../hooks/useWindowSize";

interface ZoomImageProps {
  img: string;
  children?: React.ReactNode;
}

const ZoomImage: React.FC<ZoomImageProps> = ({ img, children }) => {
  const [zoom, setZoom] = React.useState(false);
  const [windowWidth, windowHeight] = useWindowSize();

  const modalContent = (
    <div
      onClick={() => setZoom(false)}
      className="fixed top-0 left-0 w-screen h-screen bg-black flex items-center justify-center z-10 cursor-zoom-out"
    >
      {/* <div onClick={(e) => e.stopPropagation()} className="relative">
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-30 z-10">
          Click to exit
        </div>
        <div>
          <img src={img} alt="zoom" className="" />
        </div>
      </div> */}
      <img src={img} className={windowWidth > windowHeight ? "h-screen" : "w-screen"} alt="" />
    </div>
  );

  return (
    <div>
      <div className="cursor-zoom-in" onClick={() => setZoom(true)}>{children}</div>
      {zoom && ReactDOM.createPortal(modalContent, document.body)}
    </div>
  );
};

export default ZoomImage;

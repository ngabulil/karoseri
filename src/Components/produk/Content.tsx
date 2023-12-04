/* eslint-disable @typescript-eslint/no-unused-vars */
// import React from 'react'
import FeatureProduct from "./feature product";
import dataJson from "../../data/produk.json";
import ListProduct from "./list produk";
import { ReactComponent as SvgBox } from "../../assets/svg/box.svg";
import ProductOverview from "./produk overview";
import { FC, useEffect, useRef, useState } from "react";

const Content: FC = () => {
  // const defImg = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR49Gd0HkwyMiwHt6K7LnlhOah5SKdiH8A0Iw&usqp=CAU";
  const defLabel =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus neque sint id perspiciatis voluptates, incidunt repellat quae tempora molestiae nostrum. Natus saepe praesentium molestias reiciendis totam, aperiam blanditiis distinctio aliquid?";
  const popularProduct = dataJson.filter((item) => item.isPopular);
  const ref = useRef<HTMLDivElement>(null);
  const [widthRef, setWidthRef] = useState<number>();
  useEffect(() => {
    if (ref) {
      setWidthRef(ref.current?.offsetWidth);
    }
  }, [ref]);

  // const filterRecomend = (data: produk[]) => {
  //   let filtered: produk[] = [];
  //   let indexArray: number[] = [];
  //   while (filtered.length < 4) {
  //       const randomIndex = Math.floor(Math.random() * data.length);
  //       if (!indexArray.includes(randomIndex)) {
  //           filtered = [...filtered, data[randomIndex]]
  //           indexArray = [...indexArray, randomIndex]
  //       }
  //   }
  //   return filtered
  // }

  // const recommendProduct = filterRecomend(dataJson)
  return (
    <div className="py-10" ref={ref}>
      <div className="px-12 sm:px-4">
        <div className="grid grid-cols-4 gap-x-12 pb-8 sm:grid-cols-1 sm:gap-y-8 md:grid-cols-2 md:gap-y-8">
          <FeatureProduct ImgSvg={SvgBox} label={defLabel} title="lorem 50" />
          <FeatureProduct ImgSvg={SvgBox} label={defLabel} title="lorem 50" />
          <FeatureProduct ImgSvg={SvgBox} label={defLabel} title="lorem 50" />
          <FeatureProduct ImgSvg={SvgBox} label={defLabel} title="lorem 50" />
        </div>
        <div>
          <ListProduct
            data={popularProduct}
            label={defLabel}
            title="popular"
            isFilter={false}
          />
          <ProductOverview widthRef={widthRef} />
          {/* <ListProduct data={recommendProduct} label={defLabel} title='rekomendasi' isFilter={false} /> */}
          <ListProduct
            data={dataJson}
            label={defLabel}
            title="List produk"
            isFilter
          />
        </div>
      </div>
    </div>
  );
};

export default Content;

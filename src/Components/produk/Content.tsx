/* eslint-disable @typescript-eslint/no-unused-vars */
// import React from 'react'
import FeatureProduct from "./feature product";
import dataJson from "../../data/produk.json";
import ListProduct from "./list produk";
import { ReactComponent as SvgBox } from "../../assets/svg/box.svg";
import ProductOverview from "./produk overview";
import { FC } from "react";

const Content: FC = () => {
  // const defImg = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR49Gd0HkwyMiwHt6K7LnlhOah5SKdiH8A0Iw&usqp=CAU";
  const defLabel =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus neque sint id perspiciatis voluptates, incidunt repellat quae tempora molestiae nostrum. Natus saepe praesentium molestias reiciendis totam, aperiam blanditiis distinctio aliquid?";
  const popularProduct = dataJson.filter((item) => item.isPopular);

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
    <div className="py-10">
      <div>
        <div className="grid max-w-8xl mx-auto grid-cols-4 gap-x-12 pb-8 px-12 sm:px-4 sm:grid-cols-1 sm:gap-y-8 md:grid-cols-2 md:gap-y-8">
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
          <ProductOverview />
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

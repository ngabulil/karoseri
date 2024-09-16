import FeatureProduct from "./feature product";
import ListProduct from "./list produk";
import ProductOverview from "./produk overview";
import { FC, useEffect } from "react";
import { UseProductContext } from "../../Context/ProductContext";
import {
  GuaranteeSvg,
  OriginalSvg,
  QualitySvg,
  ShieldSvg,
} from "../../assets/svg";

const Content: FC = () => {
  const { products, getAllProducts } = UseProductContext();
  const popularProduct = products.filter((item: any) => item.is_fav);
  useEffect(() => {
    getAllProducts();
  }, []);
  return (
    <div className="py-10">
      <div>
        <div className="grid max-w-8xl mx-auto grid-cols-4 gap-x-12 pb-8 px-12 sm:px-4 sm:grid-cols-1 sm:gap-y-8 md:grid-cols-2 md:gap-y-8">
          <FeatureProduct
            ImgSvg={QualitySvg}
            label={
              "Dibuat dengan bahan terbaik untuk memastikan keawetan dan kenyamanan, serta memberikan performa optimal."
            }
            title="Bahan Berkualitas"
          />
          <FeatureProduct
            ImgSvg={ShieldSvg}
            label={
              "Dirancang untuk bertahan lama, memberikan nilai lebih untuk setiap pembelian dengan kekuatan dan daya tahan yang unggul."
            }
            title="Tahan Lama"
          />
          <FeatureProduct
            ImgSvg={OriginalSvg}
            label={
              "Hanya produk asli dari merek terpercaya, menjamin keautentikan dan kualitas yang konsisten sesuai standar."
            }
            title="Produk Original"
          />
          <FeatureProduct
            ImgSvg={GuaranteeSvg}
            label={
              "Dapatkan ketenangan pikiran dengan garansi resmi, memastikan perlindungan dan dukungan jika ada masalah dengan produk."
            }
            title="Bergaransi"
          />
        </div>
        <div>
          <ListProduct
            data={popularProduct}
            label={
              "Pilihan favorit yang terbukti unggul, menawarkan kualitas terbaik dan kepuasan tinggi"
            }
            title="Produk Populer"
            isFilter={false}
          />
          <ProductOverview />
          {/* <ListProduct data={recommendProduct} label={defLabel} title='rekomendasi' isFilter={false} /> */}
          <ListProduct
            data={products}
            label={
              "Pilihan karoseri mobil terbaik untuk berbagai kebutuhan, menawarkan desain yang kuat dan fungsional."
            }
            title="List Produk"
            isFilter
          />
        </div>
      </div>
    </div>
  );
};

export default Content;

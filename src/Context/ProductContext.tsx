import React from "react";
import { getAllMobil } from "../services/Produk mobil";

interface ProductContextProps {
  children: React.ReactNode;
}
const ProductContext = React.createContext<any>({});
export const UseProductContext = () => React.useContext(ProductContext);
const ProductProvider: React.FC<ProductContextProps> = ({ children }) => {
  const [products, setProducts] = React.useState<any[]>([]);
  const [recomendedProducts, setRecomendedProducts] = React.useState<any[]>([]);
  const [loading, setLoading] = React.useState(true);

  const getAllProducts = async () => {
    setLoading(true);
    try {
      const data = await getAllMobil();
      setProducts(data.data.map((item: any) => ({
        ...item,
        img: item.images[0],
        short: item.summary
      })));
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  const getRecommededProducts = async (id? : any) => {
      setLoading(true);
      try {
        const data = await getAllMobil({ limit: 4, id });
        setRecomendedProducts(data.data.map((item: any) => ({
          ...item,
          img: item.images[0],
          short: item.summary
        })))
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
  }
  const value = {
    products,
    recomendedProducts,
    loading,
    getAllProducts,
    getRecommededProducts
  };
  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
};
export default ProductProvider;

import React, { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { AiFillCloseSquare } from "react-icons/ai";
import { getAllMobil } from "../../services/Produk mobil";
import { IoIosSearch } from "react-icons/io";
import { Link } from "react-router-dom";
import { toRupiah } from "../../helper/numberConvert";

let openModal = () => {};

const ModalProduct = () => {
  const [open, setOpen] = React.useState(false);
  const [search, setSearch] = React.useState("");
  const [products, setProducts] = React.useState<any[]>([]);
  const [searchProducts, setSearchProducts] = React.useState<any[]>([]);
  const inputRef = useRef(null);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setSearch("");
    setOpen(false);
  };

  const fetchData = async () => {
    try {
      const { data } = await getAllMobil();
      setProducts(data);
      setSearchProducts(data);
    } catch (error) {
      console.log(error);
    }
  };
  openModal = handleOpen;

  useEffect(() => {
    const tes = products.filter((product: any) =>
      product.name.toLowerCase().includes(search.toLowerCase())
    );
    setSearchProducts([...products, ...tes, ...searchProducts]);
  }, [search]);

  useEffect(() => {
    if (inputRef.current) {
      (inputRef.current as any).focus();
    }
    if (open) {
      fetchData();
    }
    setSearch("");
    setSearchProducts(products);
  }, [open]);

  return open
    ? createPortal(
        <div className="">
          <div
            onClick={handleClose}
            className="w-[100vw] min-h-screen bg-black opacity-60 fixed top-0 z-[3]"
          ></div>
          <div className="fixed z-[4] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-md bg-slate-200 flex flex-col max700:w-[90%]">
            <div className="py-3 px-2 border-b border-slate-300 h-[48px]">
              <label className="flex items-center gap-2" htmlFor="inputSearch">
                <IoIosSearch size={25} />
                <input
                  ref={inputRef}
                  className="bg-transparent text-sm w-full outline-none"
                  onChange={(e) => setSearch(e.target.value)}
                  type="text"
                  id="inputSearch"
                  placeholder="Cari Nama Produk"
                  autoComplete="off"
                />
                <AiFillCloseSquare
                  size={28}
                  className="cursor-pointer"
                  color="red"
                  onClick={handleClose}
                />
              </label>
            </div>
            <div className="py-2 pl-2 h-full">
              <ul className="max-h-[336px] overflow-y-auto">
                {searchProducts.map((product: any, i: number) => (
                  <li
                    key={i}
                    className={`${
                      i === searchProducts.length - 1 ? "pb-0" : "pb-4"
                    } flex gap-4 items-center`}
                  >
                    <img className="w-28 h-28" src={product.images[0]} alt="" />
                    <div>
                      <Link onClick={handleClose} to={`/produk/detail/${product.id}`} className="font-bold">{product.name}</Link>
                      <p>{product.type}</p>
                      <p>{toRupiah(product.price)}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            {/* <div></div> */}
          </div>
        </div>,
        document.body
      )
    : null;
};

export { openModal };
export default ModalProduct;

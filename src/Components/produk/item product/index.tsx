import React from "react";
import { Link } from "react-router-dom";
import { toRupiah } from "../../../helper/numberConvert";

interface ItemProductProps {
  data: produk;
}

const ItemProduct: React.FC<ItemProductProps> = ({ data }) => {
  return (
    <div>
      <div className="max-w-[300px] mx-auto flex flex-col p-4 border-2 rounded-md bg-slate-200 h-full sm:p-2">
        <div className="flex w-full">
          <img className="rounded-md w-full h-[200px] max600:max-h-[150px]" src={data.img} alt={`produk ${data.name}`} />
        </div>
        <div>
          <Link
            to={`/produk/detail/${data.id}`}
            className="w-fit cursor-pointer font-bold capitalize text-xl mt-2"
          >
            {data.name}
          </Link>
        </div>
        <div>
          <p className="capitalize">{data.type}</p>
        </div>
        <div>
          <p className="font-semibold">{toRupiah(data.price)}</p>
        </div>
        <div>
          <p>{data.short}</p>
        </div>
      </div>
    </div>
  );
};

export default ItemProduct;

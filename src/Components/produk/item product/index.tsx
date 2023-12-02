import React from "react";
import { useNavigate } from "react-router-dom";
import { toRupiah } from "../../../helper/numberConvert";
import ButtonPrimary from "../../button/ButtonPrimary";

interface ItemProductProps {
  data: produk;
}

const ItemProduct: React.FC<ItemProductProps> = ({ data }) => {
  const navigate = useNavigate();
  const handleDetail = (id: number, name: string) => {
    const validStr = name.replaceAll(" ", "-");
    navigate(`/produk/detail/${id}/${validStr}`);
  };
  return (
    <div>
      <div className="max-w-[300px] mx-auto flex flex-col p-4 border-2 rounded-xl bg-slate-200 h-full">
        <div className="flex w-full">
          <img src={data.img} alt={`produk ${data.name}`} />
        </div>
        <div>
          <p
            className="w-fit cursor-pointer font-bold capitalize text-xl mt-2"
            onClick={() => handleDetail(data.id, data.name)}
          >
            {data.name}
          </p>
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
        <ButtonPrimary
          click={() => handleDetail(data.id, data.name)}
          title="Lihat Detail"
          moreStyle="mt-auto pt-3"
        />
      </div>
    </div>
  );
};

export default ItemProduct;

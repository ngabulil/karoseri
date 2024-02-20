import React, { useState } from "react";
import ItemProduct from "../item product";

interface ListProps {
  data: produk[];
  title: string;
  label: string;
  isFilter?: boolean;
}

const ListProduct: React.FC<ListProps> = ({ data, label, title, isFilter = false }) => {
  const [filteredData, setFilteredData] = React.useState<produk[]>([]);
  const filterName: string[] = [];
  const [activeType, setActiveType] = useState('semua')
  for (const item of data) {
    if (!filterName.includes(item.type)) {
      filterName.push(item.type);
    }
  }
  const handleFilterProduct = (name: string) => {
    if (!name) {
    setActiveType('semua')
    } else {
    setActiveType(name)
    }
    if (name) setFilteredData(data.filter((item) => item.type.includes(name)));
    else setFilteredData(data);
  };

  React.useEffect(() => {
    setFilteredData(data);
  }, [data]);
  return (
    <div className="py-8">
      <div>
        <div className="flex justify-center">
          <div className="max-w-[400px] text-center">
            <div>
              <p className="text-2xl capitalize font-bold sm:text-3xl sm:underline">{title}</p>
            </div>
            <div className="py-4">
              <p>{label}</p>
            </div>
          </div>
        </div>
        {isFilter && (
          <div className="flex">
            <div className="grid grid-cols-5 mx-auto w-fit p-6 text-center text-lg sm:overflow-auto sm:flex sm:px-2 sm:w-auto">
              <div className={`cursor-pointer px-6 py-2 ${activeType === 'semua' && 'text-white font-semibold rounded-lg bg-sky-600'}`}>
                <button
                  className="capitalize"
                  onClick={() => handleFilterProduct("")}
                >
                  semua
                </button>
              </div>
              {filterName.map((item) => (
                <div className={`cursor-pointer px-6 py-2 ${activeType === item && 'text-white font-semibold rounded-lg bg-sky-600'}`}>
                  <button
                    className="capitalize"
                    onClick={() => handleFilterProduct(item)}
                  >
                    {item}
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
        <div className="grid grid-cols-4 gap-x-6 gap-y-12 py-6 sm:grid-cols-1 smDown:grid-cols-2 xmd:grid-cols-4">
          {(isFilter ? filteredData : data)?.map((item) => (
            <ItemProduct data={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ListProduct;

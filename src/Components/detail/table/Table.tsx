import React from "react";

interface TableProps {
  dataTable?: [string, string][];
}

const Table: React.FC<TableProps> = ({ dataTable = [["string", "string"], ["string", "spesifikasi dari salah satu unit kendaraan buata PT. Prakarsa Putra"]] }) => {
  return (
    <div className="overflow-x-auto">
      <table className="mx-auto min-w-[345px]">
        <thead>
          <tr className="bg-sky-600 text-white">
            <th className="rounded-l-md relative p-4 after:content-[''] after:w-1 after:absolute after:top-[50%] after:translate-y-[-50%] after:translate-x-[50%] after:right-0 after:h-1/2 after:bg-sky-50 after:max-h-[28px]">No</th>
            <th className="p-4 relative after:content-[''] after:w-1 after:absolute after:top-[50%] after:translate-y-[-50%] after:translate-x-[50%] after:right-0 after:h-1/2 after:bg-sky-50 after:max-h-[28px]">Spesifikasi</th>
            <th className="rounded-r-md p-4">Keterangan</th>
          </tr>
        </thead>
        <tbody>
          {dataTable.map((val, i) => (
            <tr key={i} className={`${i % 2 !== 0 ? "bg-slate-200" : "bg-slate-50"} font-medium`}>
              <td className="p-4 relative after:content-[''] after:w-[2px] after:absolute after:top-[50%] after:translate-y-[-50%] after:translate-x-[50%] after:right-0 after:h-1/2 after:bg-black after:max-h-[28px]">{i + 1}</td>
              <td className="p-4 relative after:content-[''] after:w-[2px] after:absolute after:top-[50%] after:translate-y-[-50%] after:translate-x-[50%] after:right-0 after:h-1/2 after:bg-black after:max-h-[28px]">{val[0]}</td>
              <td className="p-4">{val[1]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;

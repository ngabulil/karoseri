/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";

interface TableProps {
  columns: {
    header: string;
    value: string;
    cell?: any;
  }[];
  data: any;
}

const ReusableTable: React.FC<TableProps> = ({ columns, data }) => {
  const dataHeader = ["No." ,...columns.map((v) => v.header)];
  const dataBody = [{ value: "no" }, ...columns];

  const renderTd = (dataTable: any, col: any, index: number) => {
    if (col.cell) {
      return col.cell(dataTable, dataTable[col.value]);
    }
    if (col.value === "no") {
        return <td>{index + 1}</td>
    }
    return <td>{dataTable[col.value]}</td>;
  };
  return (
    <div>
      <table>
        <thead>
          <tr>
            {dataHeader.map((header) => (
              <th>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data?.map((val: any, i: number) => (
            <tr>{dataBody?.map((col) => renderTd(val, col, i))}</tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ReusableTable;

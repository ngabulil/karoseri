/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import ButtonActions from "./button";

interface ActionProps {
  keyAction: {
    name: string;
    onClick: any;
  }[];
  row?: any;
}

const Action: React.FC<ActionProps> = ({ row, keyAction }) => {
  const renderAction = ButtonActions.filter((v) =>
    keyAction.map((val) => val.name).includes(v.key)
  );
  return (
    <div className="flex">
      {renderAction.map((v, i) => (
        <v.component row={row} onClick={keyAction[i].onClick} />
      ))}
    </div>
  );
};

export default Action;

import { arrData } from "./arrayReduce";

export const arrToArr = (data: arrData[]) => {
  const resultArray = [];

  for (let i = 0; i < data.length; i += 1) {
    resultArray.push([data[i]]);
  }
  return resultArray;
};

export interface arrData {
  id: number;
  img: string;
  name: string;
  perusahaan: string;
  description: string;
}

export const arrReduce = (data: arrData[]) => {
  const resultArray = [];

  for (let i = 0; i < data.length - 1; i += 2) {
    resultArray.push([data[i], data[i + 1]]);
  }
  
  if (data.length % 2 !== 0) {
    resultArray.push([data[data.length - 1]]);
  }
  return resultArray;
};

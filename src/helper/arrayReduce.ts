export interface arrData {
  id?: number;
  img?: string;
  name?: string;
  perusahaan?: string;
  description?: string;
}

export const arrReduce = (data: arrData[] | any[], jumlahPecahan: number): any[] => {
  const resultArray: any[] = [];
  const jumlahData = data.length;
  const jumlahBagian = Math.ceil(jumlahData / jumlahPecahan);

  let dataIndex = 0;

  for (let i = 0; i < jumlahBagian; i++) {
    const bagianArray: any[] = [];

    for (let j = 0; j < jumlahPecahan; j++) {
      if (dataIndex < jumlahData) {
        bagianArray.push(data[dataIndex]);
        dataIndex++;
      }
    }

    resultArray.push(bagianArray);
  }

  return resultArray;
};

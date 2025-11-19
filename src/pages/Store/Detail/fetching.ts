import axios from "axios";
export const getData = async (id: number | string | undefined) => {
  const res = await axios.get(`https://fakestoreapi.com/products/${id}`);
  return res.data;
};

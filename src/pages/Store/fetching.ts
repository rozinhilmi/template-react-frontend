import { helper } from "@/utils/helper";
import axios from "axios";

export const getData = async () => {
  const token = helper.useToken();
  const res = await axios.get("https://fakestoreapi.com/products", token);
  return res.data;
};

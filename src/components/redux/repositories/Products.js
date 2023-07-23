import axios from "axios";
import { Urls } from "../urls";

export const getAllProductsRepo = () => {
  return axios({
    method: "GET",
    url: Urls.GET_ALL_PRODUCTS,
  });
};
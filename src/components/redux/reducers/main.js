import { getProductsReducers, getProductsByIdReducer } from "./Productsreducer";
import allProductsSlice from "../slices/Products";

import {combineReducers} from "redux";

const rootreducers = combineReducers({
    allProduct : allProductsSlice,
    getproductsdata : getProductsReducers,
    getproductbyid : getProductsByIdReducer
});

export default rootreducers;
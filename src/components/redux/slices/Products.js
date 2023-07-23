import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  products:[],
  isLoading:false
};
const BASE_URL = 
  process.env.NODE_ENV === "production" 
          ? "api/products": "http://localhost:3000/api/products" ;


export const getAllProducts = createAsyncThunk("AllProducts",async ()=>{
  try {
    let response = await axios.get(BASE_URL)
    return response.data.data
  } catch (error) {
    console.log(error)
  }
})

export const getProductById = createAsyncThunk("AllProducts",async (id)=>{
  try {
    let response = await axios.get(`http://localhost:3000/api/products/${id}`)
    console.log("my res",response)
    return response.data.data
  } catch (error) {
    console.log(error)
  }
})

export const allProductsSlice = createSlice({
    name: "AllProducts",
    initialState,
    extraReducers: {
      [getAllProducts.pending]:(state, action) =>{
        state.isLoading = true
      },
      [getAllProducts.fulfilled]:(state, action) =>{
        state.isLoading= false
        state.products = action.payload
      },
      [getAllProducts.rejected]:(state, action) => {
        state.isLoading= false
      },

      [getProductById.pending]:(state, action) =>{
        state.isLoading = true
      },
      [getProductById.fulfilled]:(state, action) =>{
        state.isLoading= false
        state.products = action.payload
      },
      [getProductById.rejected]:(state, action) => {
        state.isLoading= false
      }
    }
});


  
export default allProductsSlice.reducer;
  
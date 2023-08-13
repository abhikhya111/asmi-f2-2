import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  users:[],
  isLoading:false
};
const BASE_URL = 
  process.env.NODE_ENV === "production" 
          ? "api/products": "http://localhost:3000/api/users" ;


export const registerUser = createAsyncThunk("registerUser",async ()=>{
  try {
    let response = await axios.get(`${BASE_URL}/register`)
    return response.data.data
  } catch (error) {
    console.log(error)
  }
})



export const allUsersSlice = createSlice({
    name: "AllProducts",
    initialState,
    extraReducers: {
      [registerUser.pending]:(state, action) =>{
        state.isLoading = true
      },
      [registerUser.fulfilled]:(state, action) =>{
        state.isLoading= false
        state.users = action.payload
      },
      [registerUser.rejected]:(state, action) => {
        state.isLoading= false
      }
    }
});


  
export default allUsersSlice.reducer;
  
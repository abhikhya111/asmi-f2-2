import {
    getAllProductsRepo
  } from "../repositories/Products";


export const getProducts = ()=> async(dispatch)=>{
    try {
        const data = await fetch("http://localhost:3000/api/products",{
                method:"GET",
                headers:{
                    "Content-Type":"application/json"
                }
        });

        const res = await data.json();
        console.log(res);
        dispatch({type:"SUCCESS_GET_PRODUCTS",payload:res});
    } catch (error) {
        dispatch({type:"FAIL_GET_PRODUCTS",payload:error.response});
    }
}

// export const getProductsById = ()=> async(dispatch,id)=>{
//     try {
//         const data = await fetch(`http://localhost:3000/api/products/${id}`,{
//                 method:"GET",
//                 headers:{
//                     "Content-Type":"application/json"
//                 }
//         });

//         const res = await data.json();
//         console.log("Response"+res);
//         dispatch({type:"SUCCESS_GET_PRODUCTS_BY_ID",payload:res});
//     } catch (error) {
//         dispatch({type:"FAIL_GET_PRODUCTS_BY_ID",payload:error.response});
//     }
// }
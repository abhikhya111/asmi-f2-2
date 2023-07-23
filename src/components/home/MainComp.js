import React, { useEffect , useState} from 'react'
import "../home/home.css";
import Slide from './Slide';
import { Divider } from '@mui/material';
// import { getAllProducts } from '../redux/actions/action';
import {getAllProducts} from "../redux/slices/Products"
import { useSelector, useDispatch } from "react-redux";


const Maincomp = () => {

    // const { products } = useSelector(state => state.getproductsdata);
    const [productsList, setProductsList] = useState([]);
    const  {products, isLoading } = useSelector((state) => state.allProduct);

    console.log(products);

    const dispatch = useDispatch();


    useEffect(()=>{
        dispatch(getAllProducts())
    },[])

    useEffect(()=>{
        setProductsList(products)
    },[products])

    

    return (
        <>
            <div className="home_section">
                <div className="banner_part">
                <div className="center_img">
                    <img src="./banner01.jpeg" alt="" />
                </div>                </div>
                

                <Slide title="Today's Deal" products={productsList} />

                <div className="center_img">
                    <img src="./banner03.jpeg" alt="" />
                </div>

                <Slide title="Best Seller" products={productsList} />
                <div className="center_img">
                    <img src="./banner02.jpeg" alt="" />
                </div>
                
                <Slide title="Upto 80% off" products={productsList} />
            </div>

            <Divider />

        </>
    )
}

export default Maincomp;

{/* {
            products.map((e)=>{
                return (
                    <>
                        <h3>{e.description}</h3>
                    </>
                )
            })
        } */}
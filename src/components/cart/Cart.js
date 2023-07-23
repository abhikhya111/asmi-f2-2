import React, { useEffect, useState } from "react";
import "./cart.css";
import { Divider } from "@mui/material";
import { NavLink, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { getProductById } from "../redux/slices/Products"
import Form from 'react-bootstrap/Form';

const Cart = () => {

    const dispatch = useDispatch();
    const { id } = useParams("");
    const [product, setProduct] = useState([]);
    const { products } = useSelector((state) => state.allProduct);

    useEffect(() => {
        dispatch(getProductById(id))
    }, [])

    useEffect(() => {
        setProduct(products)
    }, [products])





    return <div className="cart_section">
        {console.log("My products", product.colors)}
        <div className="cart_container">
            <div className="left_cart">
                <img src="https://rukminim1.flixcart.com/image/150/150/kohigsw0/resistance-tube/c/s/e/new-adjustable-single-resistance-tube-multicolor-na-ajro-deal-original-imag2xg88mhmwxz5.jpeg?q=70" alt="cart_img" />
                <div className="cart_btn">
                    <button className="cart_btn1">Add to Cart</button>
                    <NavLink to="/buynow"><button className="cart_btn2">Buy Now</button> </NavLink>
                </div>
            </div>
            <div className="right_cart">


                <h3>{product.longDscription}</h3>
                <Divider />
                <h4 className="mrp">M.R.P.: {product.mrp}</h4>

                <p className="description">About the Item :
                    <span style={{ color: "#565959", fontSize: 14, fontWeight: 500, letterSpacing: "0.4px" }}> The classical mirror polish of the appearance makes your electric kettle 1.8 Litre unique and aesthetic, which can match any type of kitchen design and 360° swivel base is connected with standard power cord for safe usage and convenient storage</span></p>
                <br></br>
                <hr></hr>
                <h5>Select Color</h5>


                <div className="colors">
                    {product?.colors?.map((pro, i) => {
                        return (
                            <>
                                <div className="color-item" style={{ backgroundColor: pro }}>

                                </div>
                            </>
                        )
                    })}
                </div>
                <br></br>
                <br></br>
                <h5>Select Size</h5>
                <div className="sizes">
                    <Form.Select>
                        {product?.sizes?.map((size) => (
                            <option key={size} value={size}>
                                {size}
                            </option>
                        ))}
                    </Form.Select>
                    

                </div>

            </div>

        </div>

    </div>
};

export default Cart;
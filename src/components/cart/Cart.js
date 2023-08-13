import React, { useEffect, useState, useContext } from "react";
import "./cart.css";
import { Divider } from "@mui/material";
import { NavLink, useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { getProductById } from "../redux/slices/Products"
import Form from 'react-bootstrap/Form';
import { ToastContainer, toast } from 'react-toastify';
import { Logincontext } from "../context/ContextProvider";

const Cart = () => {

    const dispatch = useDispatch();
    const { id } = useParams("");
    const [product, setProduct] = useState([]);
    const { products } = useSelector((state) => state.allProduct);
    const { account, setAccount } = useContext(Logincontext);
    const [ selectedColor, setSelectedColor ] = useState('');
    const [ selectedSize, setSelectedSize ] = useState('');
    const [ selectedQuantity, setSelectedQuantity ] = useState('');

    const navigate = useNavigate();
    
    const selectedColorChange = (pro) => {
        setSelectedColor(pro);
    }

    const selectedSizeChange = (e) => {
        setSelectedSize(e.target.value);
    }

    const selectedQuantityChange = (e) => {
        setSelectedQuantity(e.target.value)
    }

    const addtocart = async (id) => {
        const email = localStorage.getItem("email");
        const check = await fetch(`http://localhost:3000/api/users/addToCart/${product.productId}`, {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                product,
                selectedColor,
                selectedSize,
                selectedQuantity,
                email
            })
        });
        // // console.log(check);
        const data1 = await check.json();
        console.log(data1 +  'ok');
        if(data1){
            toast.success("Product added successfully");
            setAccount(data1);
            navigate("/buynow")
        }

    }

    useEffect(() => {
        dispatch(getProductById(id))
    }, [])

    useEffect(() => {
        setProduct(products)
    }, [products])





    return (
    <div className="cart_section">
        {console.log("My products ID", selectedColor)}
        {console.log("My products qty", selectedQuantity)}

        <div className="cart_container">
            <div className="left_cart">
                <img src="https://rukminim1.flixcart.com/image/150/150/kohigsw0/resistance-tube/c/s/e/new-adjustable-single-resistance-tube-multicolor-na-ajro-deal-original-imag2xg88mhmwxz5.jpeg?q=70" alt="cart_img" />
                <div className="cart_btn">
                    <button className="cart_btn1" onClick={() => addtocart(product.productId)}>Add to Cart</button>
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
                                <div onClick={() => selectedColorChange(pro)} value={pro} className="color-item" style={{ backgroundColor: pro }}>

                                </div>
                            </>
                        )
                    })}
                </div>
                <br></br>
                <br></br>
                <h5>Select Size</h5>
                <div className="sizes">
                    <Form.Select onChange={(e) => selectedSizeChange(e)}>
                        {product?.sizes?.map((size) => (
                            <option key={size} value={size}>
                                {size}
                            </option>
                        ))}
                    </Form.Select>
                    

                </div>

                <br></br>
                <br></br>
                <h5>Select Quantity</h5>
                <div className="qty">
                    <Form.Select onChange={(e) => selectedQuantityChange(e)}>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                    </Form.Select>
                    

                </div>

                <ToastContainer/>
            </div>

        </div>

    </div>
    )};

export default Cart;
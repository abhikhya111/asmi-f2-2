import React, { useEffect, useState, useContext } from "react";
import "./Product.css"
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import CardTravelIcon from '@mui/icons-material/CardTravel';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import StarIcon from '@mui/icons-material/Star';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import { useDispatch, useSelector } from "react-redux";
import { getProductById } from "../redux/slices/Products"
import { ToastContainer, toast } from 'react-toastify';
import { Logincontext } from "../context/ContextProvider";
import { NavLink, useNavigate, useParams } from 'react-router-dom';

const Cart2 = () => {

    const dispatch = useDispatch();
    const { id } = useParams("");
    const [product, setProduct] = useState([]);
    const { products } = useSelector((state) => state.allProduct);
    const { account, setAccount } = useContext(Logincontext);
    const [selectedColor, setSelectedColor] = useState('');
    const [selectedSize, setSelectedSize] = useState('');
    const [selectedQuantity, setSelectedQuantity] = useState(1);
    const [color, setColor] = useState(product?.colors?.[0])
    const navigate = useNavigate();

    const selectedColorChange = (pro) => {

        console.log("Color:", pro)
        setSelectedColor(pro);
        setColor(pro)
    }

    const selectedSizeChange = (size) => {
        var small = document.getElementById('S');
        var medium = document.getElementById('M');
        var large = document.getElementById('L');
        var extraLarge = document.getElementById('XL');
        var eExtraLarge = document.getElementById('XXL');

        if (size == 'S') {
            small.classList.add("no-size");
            medium.classList.remove("no-size");
            large.classList.remove("no-size");
            extraLarge.classList.remove("no-size");
            eExtraLarge.classList.remove("no-size");
        }
        else if (size == 'M') {
            small.classList.remove("no-size");
            medium.classList.add("no-size");
            large.classList.remove("no-size");
            extraLarge.classList.remove("no-size");
            eExtraLarge.classList.remove("no-size");
        }
        else if (size == 'L') {
            small.classList.remove("no-size");
            medium.classList.remove("no-size");
            large.classList.add("no-size");
            extraLarge.classList.remove("no-size");
            eExtraLarge.classList.remove("no-size");
        }
        else if (size == 'XL') {
            small.classList.remove("no-size");
            medium.classList.remove("no-size");
            large.classList.remove("no-size");
            extraLarge.classList.add("no-size");
            eExtraLarge.classList.remove("no-size");
        }
        else if (size == 'XXL') {
            small.classList.remove("no-size");
            medium.classList.remove("no-size");
            large.classList.remove("no-size");
            extraLarge.classList.remove("no-size");
            eExtraLarge.classList.add("no-size");
        }
        console.log("Size:", size);

        setSelectedSize(size);
    }
    const decreaseQty = (e) => {
        if (selectedQuantity > 1) {

            setSelectedQuantity(selectedQuantity - 1)
        }
    }

    const increaseQty = (e) => {
        if (selectedQuantity < 5) {

            setSelectedQuantity(selectedQuantity + 1)
        }
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
        console.log(data1 + 'ok');
        if (data1) {
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

        <>
            <div className="breadcrumbs-section">
                <div className="container">
                    <div className="breadcrumbs-container">
                        <a href="/" class="breadcrumbs-link">Home</a>
                        <span className="breadcrumbs-separator">/</span>

                        <a href="/women-clothing" class="breadcrumbs-link">Women Clothing</a>
                        <span className="breadcrumbs-separator">/</span>
                        <a href="/kurta-sets" class="breadcrumbs-link">Kurta Sets</a>
                        <span className="breadcrumbs-separator">/</span>
                        <a href="/kalini-kurta-sets" class="breadcrumbs-bold-link breadcrumbs-link">KALINI Kurta Sets</a>

                    </div>
                </div>
            </div>

            <div className="section product-section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-6 mb-4 mb-md-0">
                            <div className="product-image">

                                <div className="sc-dubCtV jfzUIa">
                                    {product?.img?.map((image, i) => {
                                        return (
                                            <>

                                                <div className="sc-brePNt gxETEN">
                                                    <div style={{ display: 'flex' }}>
                                                        <img width="60"
                                                            height="100"
                                                            src={image}
                                                            alt="amazonlogo"
                                                            className="ProductCard__ProductImage-sc-camkhj-4 jdAJC"
                                                            style={{ color: 'transparent' }}
                                                        />
                                                    </div>
                                                </div>
                                            </>
                                        )
                                    })}


                                </div>



                                <div className="product_img_box">
                                    <img src="https://images.meesho.com/images/products/52394111/actov_512.webp" alt="cart_img" />


                                </div>

                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                            <div className="pr_detail">
                                <div className="product_description">
                                    <h4 className="product_title">
                                        {product.productName}
                                    </h4>
                                    <div className="product_price">
                                        <span className="price">{product.mrp}</span>
                                        <del>₹ 55.25</del>
                                        <div className="on_sale">
                                            <span>35% Off</span>
                                        </div>
                                    </div>
                                    <div className="rating_wrap">
                                        <div className="rating">
                                            <div className="product_rate" style={{ width: '80%' }}>
                                                <StarIcon />
                                                <StarIcon />
                                                <StarIcon />
                                                <StarIcon />
                                                <StarHalfIcon />
                                            </div>
                                        </div>
                                        <span className="rating_num">(21)</span>
                                    </div>
                                    <div className="pr_desc">
                                        {product.longDscription}
                                    </div>
                                    <div className="product_sort_info">
                                        <ul>
                                            <li>
                                                <VerifiedUserIcon /> 1 Year AL Jazeera Brand Warranty
                                            </li>
                                            <li>
                                                <RestartAltIcon /> 30 Day Return Policy
                                            </li>
                                            <li>
                                                <CardTravelIcon /> Cash on Delivery available
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="pr_switch_wrap">
                                        <span className="switch_lable">Color</span>
                                        <div className="product_color_switch">
                                            {product?.colors?.map((pro, i) => {
                                                return (
                                                    <>
                                                        <span
                                                            className={color == pro ? "selectedColor" : ""}
                                                            id={pro}
                                                            onClick={() => selectedColorChange(pro)}
                                                            value={pro}
                                                            data-color={pro}
                                                            style={{ backgroundColor: pro }}>
                                                        </span>
                                                    </>
                                                )
                                            })}

                                        </div>
                                    </div>
                                    <div className="pr_switch_wrap">
                                        <span className="switch_lable">Size</span>
                                        <div className="product_size_switch">
                                            {/* <span className="no-size">XS</span> */}
                                            {product?.sizes?.map((size) => (
                                                <span id={size} onClick={() => selectedSizeChange(size)} value={size} key={size}>{size}</span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                <hr />
                                <div className="cart_extra">
                                    <div className="cart-product-quantity">
                                        <div className="quantity">
                                            <input type="button" onClick={decreaseQty} value="-" className="minus" fdprocessedid="wlf374" />
                                            <input type="text" name="quantity" value={selectedQuantity} title="Qty" className="qty" size="4" fdprocessedid="mk5wjp" />
                                            <input type="button" onClick={increaseQty} value="+" className="plus" fdprocessedid="cg7tft" />
                                        </div>
                                    </div>
                                    <div className="cart_btn">
                                        <button className="btn btn-primary"
                                            type="button"
                                            fdprocessedid="cd9av4"
                                            onClick={() => addtocart(product.productId)}
                                        >
                                            <AddShoppingCartIcon /> Add to cart </button>

                                    </div>
                                </div>
                                <hr />
                                <ul className="product-meta">
                                    <li>SKU: <a href="#">BE45VGRT</a>
                                    </li>
                                    <li>Category: <a href="#">Clothing</a>
                                    </li>
                                    <li>Tags: <a href="#" rel="tag">Cloth</a>, <a href="#" rel="tag">printed</a>
                                    </li>
                                </ul>

                            </div>
                        </div>
                    </div>
                </div>
                <ToastContainer />

            </div>
        </>
    )


}
export default Cart2;
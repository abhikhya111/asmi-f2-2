import React , {useState, useEffect } from "react";
import "./CartItem.css"
const CartItem = () => {
    const email = localStorage.getItem('email')
    const [cartdata, setCartdata] = useState([]);
    const [priceTotal, setTotalPrice] = useState('');
  
    const getdatabuy = async () => {
      const res = await fetch(`http://localhost:3000/api/users/cartItems/${email}`, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
      });
  
      const data = await res.json();
      console.log("cart", data.data.carts)
      const cartData = data.data.carts;
      setCartdata(data.data.carts);
  
    };
    let arr = Array();
  
    const calculateTotal = () => {
  
      {
  
        cartdata.map((e, ind) => {
          //  arr.push(e.mrp)
           console.log("mrp" , e.mrp)
           arr = [...e.mrp];
  
        })
      
    }
    setTotalPrice(arr)
  
    }
  
    useEffect(() => {
      getdatabuy();
      calculateTotal();
      console.log("Data Cart", cartdata);
    }, []);
    return (
        <>
            <div className="breadcrumbs-section">
                <div className="container">
                    <div className="breadcrumbs-container">
                        <a href="/" class="breadcrumbs-link">Home</a>
                        <span className="breadcrumbs-separator">/</span>

                        <a href="/kalini-kurta-sets" class="breadcrumbs-bold-link breadcrumbs-link">
                            Shopping Cart</a>

                    </div>
                </div>
            </div>

            <div className="cart-section">
                <div className="container">

                    <div className="row">
                        <div className="col-md-8">
                            <div className="cart-item">
                               
                                {
                                    cartdata.map((e, ind) => {
                                        <div className="_1AtVbE col-12-12">
                                        <div className="zab8Yh _10k93p">
                                            <div className="_2nQDXZ">
                                                <a>
                                                    <span>
                                                        <div className="CXW8mj" style={{ height: '112px', width: '112px' }}>
                                                            <img className="_396cs4" alt=""
                                                                src="https://rukminim2.flixcart.com/image/224/224/xif0q/kurta/o/6/d/m-552-sanwariya-creation-original-imagpxbdnwcvstyq.jpeg?q=90" />
                                                        </div>
                                                    </span>
                                                </a>
                                                <div className="_3fSRat">
                                                    <div className="_2-uG6-">
                                                        <a className="_2Kn22P gBNbID" href="/shri-radharani-creations-women-printed-a-line-kurta/p/itm27c2abb718126?pid=KTAGQ8F8HZADGS8Y&amp;lid=LSTKTAGQ8F8HZADGS8Y5LSCKQ&amp;marketplace=FLIPKART">Shri RadhaRani Creations Women Printed A-line Kurta</a>
                                                    </div>
                                                    <div className="_20RCA6"> Size :  M,Multicolor </div>
                                                    <div className="_3ZS8sw">Seller : SANWARIYA CREATION.
    
                                                    </div>
                                                    <span className="_2-ut7f _2xc6hH">₹2,999</span>
                                                    <span className="_2-ut7f _1WpvJ7">₹499</span>
                                                    <span className="dML6Ak">83% Off</span>
                                                    <div className="_3zPVJV">
                                                        <div className="ebO6Mt" id="offers-LSTKTAGQ8F8HZADGS8Y5LSCKQ">4 offers applied
    
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="_2zbf83">
                                                    <ul className="_1ZEsQ4">
                                                        <li className="JEy4SL">
                                                            <div className="_2pqhhf">Delivery by Sun Aug 20 | <span className="_3CWtsA">
                                                                <span className="_1OMRfP">Free</span>
                                                            </span>
                                                                <span className="_3CWtsA _2_Yr5B">₹40</span>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                    <ul className="_31bLAK"></ul>
                                                </div>
                                            </div>
                                            <div className="nZz3kj _1hNI6F">
                                                <div className="_1uc2IE">
                                                    <div className="_3dY_ZR">
                                                        <button className="_23FHuj" disabled=""> – </button>
                                                        <div className="_26HdzL">
                                                            <input type="text" className="_253qQJ" value="1" />
                                                        </div>
                                                        <button className="_23FHuj" fdprocessedid="5zksy"> + </button>
                                                    </div>
                                                </div>
                                                <div className="_10vWcL td-FUv WDiNrH">
                                                    <div className="_3dsJAO">Save for later</div>
                                                    <div className="_3dsJAO">Remove</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    })
                                }
                                <div className="_1AtVbE col-12-12 _78xt5Y">
                                    <div className="VUS-tD eBV0fb cart_btn">
                                        <form method="post">
                                            <input type="hidden" name="domain" value="physical" />
                                            <button className="btn btn-primary" >
                                                <span>Place Order</span>
                                            </button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="_1YokD2 _3Mn1Gg col-4-12 _78xt5Y" style={{ padding: '0px 0px 0px 16px' }}>
                                <div className="_1AtVbE col-12-12">
                                    <div className="dimARw">
                                        <div className="_35mLK5">
                                            <span className="_3aPjap">Price details</span>
                                            <div className="_I_XQO">
                                                <div className="_1MaUCb">
                                                    <div className="_2SabxT">
                                                        <div className="nxl3SA">Price (1 item)</div>
                                                    </div>
                                                    <div>
                                                        <span className="_1YQFQF">₹2,999</span>
                                                    </div>
                                                </div>
                                                <div className="_1MaUCb">
                                                    <div className="_2SabxT">
                                                        <div className="nxl3SA">Discount</div>
                                                    </div>
                                                    <div>
                                                        <span className="_1YQFQF">
                                                            <span className="_3qPnhZ">− ₹2,500</span>
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="_1MaUCb">
                                                    <div className="_2SabxT">
                                                        <div className="nxl3SA">Delivery Charges</div>
                                                    </div>
                                                    <div>
                                                        <span className="_1YQFQF">
                                                            <span className="_3qPnhZ">Free</span>
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="_3LxTgx">
                                                    <div className="Ob17DV">
                                                        <div className="_24KATy">
                                                            <div className="_2npqm0">Total Amount</div>
                                                        </div>
                                                        <div className="z4Ha90">
                                                            <span>
                                                                <div className="_1dqRvU">
                                                                    <div className="Ob17DV _3X7Jj1">
                                                                        <div className="_24KATy">
                                                                            <div className="_2npqm0"></div>
                                                                        </div>
                                                                        <div className="z4Ha90">
                                                                            <span> ₹499</span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="_3s5O6i">You will save ₹2,500 on this order</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>








        </>
    )
}
export default CartItem;
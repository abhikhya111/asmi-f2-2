import { Divider } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Right from './Right'
import Option from './Option'
import Subtotal from './Subtotal'
import './buynow.css'


const Buynow = () => {
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
    console.log(data.data.carts)
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

    // let result = cartdata.price.reduce((a, b) => {
    //   return a + b;
    // }, 0);
  }

  useEffect(() => {
    getdatabuy();
    calculateTotal();
    console.log("Data Cart", cartdata);
  }, []);
  return (
    <>
        {console.log("arr", priceTotal)}

    {cartdata.length ?
        <div className="buynow_section">
            <div className="buynow_container">
                <div className="left_buy">
                    <h1>Shopping Cart</h1>
                    <p>Select all items</p>
                    <span className="leftbuyprice">Price</span>
                    <Divider />

                    {
                        cartdata.map((e, ind) => {
                            return (
                                <>
                                    <div className="item_containert" key={ind}>
                                        {/* <img src={e.detailUrl} alt="imgitem" /> */}
                                        <div className="item_details">
                                            <h3>{e.productName}</h3>
                                            <h4>{e.longDescription}</h4>
                                            {/* <h3 className="diffrentprice">₹{e.price.cost}.00</h3> */}
                                            <p className="unusuall">Usually dispatched in 8 days.</p>
                                            <p>Eligible for FREE Shipping</p>
                                            <img src="https://m.media-amazon.com/images/G/31/marketing/fba/fba-badge_18px-2x._CB485942108_.png" alt="logo" />
                                            <Option productId={e.productId} get={getdatabuy} />
                                        </div>
                                        {/* <h3 className="item_price">₹{e.price.cost}.00</h3> */}
                                    </div>
                                    <Divider />
                                </>
                            )
                        })
                    }
                 
                    <Subtotal iteam={cartdata} />
                </div>
                <Right iteam={cartdata} />
            </div>
        </div> : ""
    }
</>


  )
}

export default Buynow

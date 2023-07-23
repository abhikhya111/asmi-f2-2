import React from 'react'
import "../home/slide.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
// import { products } from './productdata';
import { Divider } from '@mui/material';
import { NavLink } from "react-router-dom";

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 4
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};

const Slide = ({ title, products }) => {

    console.log("Slice" ,products)
    return (
        <div className="products_section">
            <div className="products_deal">
                <h3>{title}</h3>
                <button className="view_btn">View All</button>
            </div>
            <Divider />

        { Array.isArray(products) ?(    
        
        <Carousel
                responsive={responsive}
                infinite={true}
                draggable={false}
                swipeable={true}
                centerMode={true}
                autoPlay={true}
                autoPlaySpeed={4000}
                keyBoardControl={true}
                showDots={false}
                removeArrowOnDeviceType={["tablet", "mobile"]}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
                containerClass="carousel-container"
            >
                {
                    products.map((e) => {
                        return (
                            <NavLink to={`/getproductsone/${e.productId}`}>
                                <div className="products_items" style={{border: "1px solid #E0E0E0", margin: "10px" , width: "300px"}}>
                                   
                                    <div className="center_img">
                                        <img src="./Kurta01.jpeg" alt="" />
                                    </div>
                                    <p style={{textAlign:"left"}}className="products_name"><b>{e?.productName}</b></p>
                                    <p className="products_offer" style={{ color: "#606471" }}>{e?.titleDescription}</p>
                                    <p className="products_explore">{e?.mrp}</p>
                                </div>
                            </NavLink>
                        )
                    })
                }

            </Carousel>
            ) : null
        }
        
        </div>
    )
}

export default Slide

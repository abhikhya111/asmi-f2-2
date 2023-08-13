import React, { useEffect, useState } from 'react'
import "./Navbar.css"
import SearchIcon from '@mui/icons-material/Search';
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Avatar from '@mui/material/Avatar';
import { NavLink } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import { Drawer, IconButton, List, ListItem } from '@mui/material';
import RightHeader from './RightHeader';
import { makeStyles } from '@material-ui/core';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import LogoutIcon from '@mui/icons-material/Logout';
import { getProducts } from '../redux/actions/action';
import { useSelector, useDispatch } from "react-redux";

const usestyle = makeStyles({
  component: {
    marginTop: 10,
    marginRight: "-50px",
    width: "300px",
    padding: 50,
    height: "300px"
  },
})
export default function Navbar() {


  const email = localStorage.getItem('email');
  const username = localStorage.getItem('fname');
  const [cartdata, setCartdata] = useState("");
  const [open, setOpen] = useState(false);
  const [liopen, setLiopen] = useState(true);
  const [dropen, setDropen] = useState(false);
  const [text, setText] = useState();

  const classes = usestyle();
  // only for search
  const { products } = useSelector(state => state.getproductsdata);

  const dispatch = useDispatch();
  console.log(text);
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch])
  console.log("Prod", products.data);
  const handelopen = () => {
    setDropen(true);
  }
  const handleClosedr = () => {
    setDropen(false)
  }
  const handleClick = (event) => {
    setOpen(event.currentTarget);
  };
  const handleClose = () => {
    setOpen(false)
  };
  const getText = (text) => {
    setText(text)
    setLiopen(false)
  }
  const getdatabuy = async () => {
    const res = await fetch(`http://localhost:3000/api/users/cartItems/${email}`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
    });

    const data = await res.json();
    const cartData = data?.data?.carts;
    setCartdata(cartData?.length);

  };

  useEffect(() => {
    getdatabuy();
  })
  return (
    <div>

      <header style={{ height: "90px" }}>
        <nav>
          <div className="left">
            <IconButton className="hamburgur" onClick={handelopen}>
              <MenuIcon style={{ color: "#fff" }} />
            </IconButton>
            <Drawer open={dropen} onClose={handleClosedr} >
              <RightHeader
                // userlog={logoutuser} 
                logclose={handleClosedr} />
            </Drawer>
            <div className='navlogo'>
              <NavLink to="/"> <img src='./AsmiBoutique.png' alt="" /></NavLink>

            </div>
            <div className='nav_searchbaar'>
            <input type="text" name=""
                            onChange={(e) => getText(e.target.value)}
                            placeholder="Search Your Products" />
                        <div className="search_icon">
                            <i className="fas fa-search" id="search"></i>
                        </div>
              
              {
                            text &&
                            <List className="extrasearch" hidden={liopen}>
                                {
                                    products?.data?.filter(product => product.productName.toLowerCase().includes(text.toLowerCase())).map(product => (
                                        <ListItem>
                                            <NavLink to={`/getproductsone/${product.productId}`} onClick={() => setLiopen(true)}>
                                                {product.productName}
                                            </NavLink>
                                        </ListItem>
                                    ))
                                }
                            </List>
                        }
            </div>
          </div>
          <div className="right">
            <p style={{ color: "white" }}>Hello {username}</p>

            <div className="nav_btn">
              <NavLink to="/login">Sign in</NavLink>
            </div>
            <div className='cart_btn'>
              {email ?
                <Badge badgeContent={cartdata} color="primary">
                  <NavLink to="/buynow"><ShoppingCartIcon id="icon" /></NavLink>
                </Badge>
                :
                <Badge badgeContent={0} color="primary">
                  <NavLink to="/login"><ShoppingCartIcon id="icon" /></NavLink>
                </Badge>
              }
              {/* <NavLink to="/getproductsone/:id">Cart</NavLink> */}

            </div>
            { username ? 
              <Avatar className="avatar" onClick={handleClick} >{username[0].toUpperCase()}</Avatar>
              :
              <Avatar className="avatar" onClick={handleClick} ></Avatar>

            }
            <div className="menu_div">
              <Menu
                anchorEl={open}
                open={Boolean(open)}
                onClose={handleClose}
                className={classes.component}
              >
                <MenuItem onClick={handleClose} style={{ margin: 10 }}>My account</MenuItem>
                {username ? <MenuItem onClick={handleClose} style={{ margin: 10 }}><LogoutIcon style={{ fontSize: 16, marginRight: 3 }} />   Logout</MenuItem> : ""}
              </Menu>
            </div>
          </div>
        </nav>
      </header>
    </div>
  )
}

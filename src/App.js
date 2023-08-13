import React from 'react';
import './App.css';
import NewNav from './components/newnavbar/NewNav';
import Navbar from './components/header/Navbar';
import MainComp from './components/home/MainComp';
import Footer from './components/footer/Footer';
import SignIn from './components/signup_signin/SignIn';
import SignUp from './components/signup_signin/SignUp';
import Cart from './components/cart/Cart';
import Buynow from './components/buynow/Buynow';
import {Routes,Route } from "react-router-dom";
import AddressList from './components/address/AddressList';
import AddAddress from './components/address/AddAddress';

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <NewNav />
    
        <React.Fragment>
          <Routes>
        <Route path="/" element={<MainComp />} />       
          <Route path="/login" element={<SignIn />} />          
          <Route path="/register" element={<SignUp />} />
          <Route path="/getproductsone/:id" element={<Cart />} />
          <Route path="/buynow" element={<Buynow />} />
          <Route path="/addreslist" element={<AddressList />} />
          <Route path="/addresses" element={<AddAddress />} />

          </Routes>
        </React.Fragment>
       
     
      <Footer />
    </React.Fragment>
  );
}

export default App;

import React from 'react';
import {Routes, Route, Navigate} from "react-router-dom";
import Home from '../pages/Home';
import Cart from '../pages/Cart';
import Checkout from '../pages/Checkout';
import Login from '../pages/Login';
import ProductDetails from '../pages/ProductDetails';
import Shop from '../pages/Shop';
import Signup from '../pages/Signup';


function Routers(props) {
    return (
        <Routes>
            <Route path='home' element = {<Home/>} />
            <Route path='cart' element = {<Cart/>} />
            <Route path='shop' element = {<Shop/>} />
            <Route path='shop/:id' element = {<ProductDetails/>} />
            <Route path='checkout' element = {<Checkout/>} />
            <Route path='login' element = {<Login/>} />
            <Route path='Signup' element = {<Signup/>} />
        </Routes>
    );
}

export default Routers;
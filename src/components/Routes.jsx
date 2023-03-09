import React from 'react'
import { BrowserRouter, Routes, Route,} from 'react-router-dom';
import Home from './Home';
import { List } from "./Wishlist/List";
import  CartContent  from "../components/Carro/CartContent";
import CartProvider from './Carro/CartProvider';
import ProductDeatail from './ProductDetail/ProductDeatail';
import PageRegister from "./Register/PageRegister";

export const Router = () =>{
    return (
    <CartProvider>
    <BrowserRouter>
    <Routes>
        <Route path='/Register' element={<PageRegister/>}/>
        <Route path='/' element={<Home/>}/>
        <Route path="/Wishlist" element={<List/>}/>
        <Route path="/Cart" element={<CartContent/>}/>
        <Route path="/:id" element={<ProductDeatail/>}/>
    </Routes>
    </BrowserRouter>
    </CartProvider>
    )}

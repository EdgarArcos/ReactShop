import React from 'react'
import { BrowserRouter, Routes, Route,} from 'react-router-dom';
import Home from '../Home/Home';
import { List } from "../Wishlist/List";
import  CartContent  from "../Carro/CartContent";
import CartProvider from '../Carro/CartProvider';
import ProductDeatail from '../ProductDetail/ProductDeatail';
import PageLogin from "../Log-in/PageLogin";
import { PageERROR } from '../PageError/PageERROR';

export const Router = () =>{
    return (
    <CartProvider>
    <BrowserRouter>
    <Routes>
        <Route path='*' element={<PageERROR/>}/>
        <Route path='/Login' element={<PageLogin/>}/>
        <Route path='/' element={<Home/>}/>
        <Route path="/Wishlist" element={<List/>}/>
        <Route path="/Cart" element={<CartContent/>}/>
        <Route path="/:id" element={<ProductDeatail/>}/>
    </Routes>
    </BrowserRouter>
    </CartProvider>
    )}

import React from 'react'
import { ReactDOM } from "react-dom";
import { BrowserRouter, Routes, Route,} from 'react-router-dom';
import Home from './Home';
import { List } from "./Wishlist/List";
import  CartContent  from "../components/Carro/CartContent";

export const Router = () =>{
    return (
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path="/Wishlist" element={<List/>}/>
        <Route path="/Cart" element={<CartContent/>}/>
    </Routes>
    </BrowserRouter>
    )}

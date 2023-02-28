import React from 'react'
import { ReactDOM } from "react-dom";
import { BrowserRouter, Routes, Route,} from 'react-router-dom';
import Home from './Home';
import { List } from "./Wishlist/List";

export const Router = () =>{
    return (
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path="/Wishlist" element={<List/>}/>
    </Routes>
    </BrowserRouter>
    )}

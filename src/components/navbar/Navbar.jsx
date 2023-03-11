import React from 'react'
import { MdShoppingCart,MdAddTask,MdHome,MdOutlinePersonAddAlt } from "react-icons/md";
import "./navbar.css";
import { Link } from 'react-router-dom';
import  Buscador  from "./Buscador";


export const Navbar = () => {
  return (
      <nav className='navbar'>
      <div className="nav_logo">PCED</div>
      <div>
      <Buscador/>
      </div>
      <div className="nav_items">
        <Link className='nav_icons' to="/"><MdHome/></Link>
        <Link className='nav_icons' to="/Wishlist"><MdAddTask/></Link>
        <Link className='nav_icons' to="/Cart"><MdShoppingCart/></Link>
        <Link className='nav_icons' to="/Login"><MdOutlinePersonAddAlt/></Link>
      </div>
    </nav>
  )
}



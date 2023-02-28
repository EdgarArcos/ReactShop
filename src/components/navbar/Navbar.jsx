import React from 'react'
import "./navbar.css";
import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className="nav_logo">PCED</div>
      <div className="nav_items">
        <a href="#">Inicio</a>
        <a href="#">Tienda</a>
        <Link to="/Wishlist">WishList</Link>
        <a href="#">Carrito</a>
      </div>
    </nav>
  )
}



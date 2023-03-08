import React from 'react'
import "./navbar.css";
import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className="nav_logo">PCED</div>
      <div className="nav_items">
        <a href="#">Inicio</a>
        <Link to="/">Tienda</Link>
        <Link to="/Wishlist">WishList</Link>
        <Link to="/Cart">Carrito</Link>
      </div>
    </nav>
  )
}



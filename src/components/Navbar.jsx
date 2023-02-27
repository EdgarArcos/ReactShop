import React from 'react'
import "./navbar.css";
export const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="nav_logo">PCED</div>
      <div className="nav_items">
        <a href="#">Inicio</a>
        <a href="#">Tienda</a>
        <a href="#">Carrito</a>
      </div>
    </div>
  )
}



import React, {useContext} from 'react'
import { cartContext } from './CartProvider'
import ItemCart from './ItemCart';
import TotalCart from './TotalCart';
import {Navbar} from "../navbar/Navbar";
import "./carro.css";

export default function CartContent() {
    const [cart]  = useContext(cartContext);
  return (
    <>
    <nav><Navbar/></nav>
    <div className='cart_list'>
        {
        cart.map((product,id) =>{
            return(
            <ItemCart id={id} product={product} key={id}/>  
            )
          })
        }
<TotalCart/>
    </div>
    </>
  )
}

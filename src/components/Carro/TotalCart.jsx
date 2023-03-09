import React, {useContext,useState} from 'react'
import { cartContext } from './CartProvider'
import MostrarTotal from "./MostrarTotal";
export default function TotalCart() {
    const [cart]  = useContext(cartContext);
    return(
    <div>{
    cart.map((product) =>{
        return<MostrarTotal product={product}/>
})}
    </div>)
}

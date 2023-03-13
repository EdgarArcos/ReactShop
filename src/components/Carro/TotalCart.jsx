import React, {useContext} from 'react'
import { cartContext } from './CartProvider'
import "./carro.css"
export default function TotalCart() {
    const [cart]  = useContext(cartContext);
    const total = cart.reduce((acumulador ,currentProduct) =>{
    return acumulador + currentProduct.price
    },0)
    return(
        <p className='total'>Total del pedido: {Math.round(total)}</p>
    )
    }
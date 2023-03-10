import React, { useContext } from 'react'
import { cartContext } from './CartProvider'

export default function ButtonDeleteCart (product) {
    const [cart, setCart]  = useContext(cartContext);
    const onDeleteItem = (id) =>{
        setCart([...cart].filter(products => products.id !== id))
    }
    return (
        <button onClick={() => onDeleteItem(product.id)}>Delete</button>
    )
}



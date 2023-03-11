import React, { useContext } from 'react'
import { cartContext } from './CartProvider'
import { MdOutlineDeleteForever } from "react-icons/md";

export default function ButtonDeleteCart (product) {
    const [cart, setCart]  = useContext(cartContext);
    const onDeleteItem = (id) =>{
        setCart([...cart].filter(products => products.id !== id))
    }
    return (
        <span className='buttonDelete' onClick={() => onDeleteItem(product.id)}><MdOutlineDeleteForever/></span>
    )
}



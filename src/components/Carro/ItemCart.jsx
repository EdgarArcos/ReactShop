import React from 'react'
import ButtonDeleteCart from './ButtonDeleteCart';
import "./carro.css";


export default function ItemCart({product}) {
    const { url, name, price, id } = product;
  return (
    <div className='item_cart'>
        <img  className='productCartPhoto' src={url} alt={name} />
        <h2>{name}</h2>
        <h3> Precio {price}</h3>
        <ButtonDeleteCart id={id} product ={product}/>
    </div>
  )
}

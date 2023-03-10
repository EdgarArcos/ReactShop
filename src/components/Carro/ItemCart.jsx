import React from 'react'
import ButtonDeleteCart from './ButtonDeleteCart';



export default function ItemCart({product}) {
    const { url, name, price, id } = product;
  return (
    <div>
    <ul>
        <li>
        <h2>{name}</h2>
        <img src= {url} alt={name} />
        <p>{price}</p>
        <p>{id}</p>
        <ButtonDeleteCart id={id} product ={product}/>
        </li>
    </ul>
    </div>
  )
}

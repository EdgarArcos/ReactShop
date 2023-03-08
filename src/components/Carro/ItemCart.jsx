import React from 'react'
import ButtonDeleteCart from './ButtonDeleteCart';



export default function ItemCart({product}) {
    const { url, name, price, id } = product;
    //console.log(product);
  return (
    <ul>
        <li>
        <img src= {url} alt={name} />
        <p>{name}</p>
        <p>{price}</p>
        <p>{id}</p>
        <ButtonDeleteCart id={id} product ={product}/>
        </li>
    </ul>
  )
}

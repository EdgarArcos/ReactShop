import React from 'react'

import "./items.css"
import AddtoCartButton from './AddtoCartButton';
import VerMasButton from './VerMasButton';


export const ProductItem = ({item}) => {    
    const { url, name, price,id } = item;
  return (
    <div className='productCage'>
    <img className='productPhoto' src={url} alt={name} />
    <div>
      <h2 className='description'>{name}</h2>
      <h3 className='description'>Precio: {price}</h3>
      <p>Lorem ipsum dolor sit amet consectetur</p>
    </div>
      <AddtoCartButton item={item}/>
      <VerMasButton item={item}/>
  </div>
  )
}

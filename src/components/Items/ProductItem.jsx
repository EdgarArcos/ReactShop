import React from 'react'
import "./items.css"

export const ProductItem = ({item}) => {
    const { url, name, price } = item;
  return (
    <div className='productCage'>
    <img className='productPhoto' src={url} alt="" />
    <div>
      <p className='description'>{name}</p>
      <p className='description'>{price}</p>
    </div>
  </div>
  )
}

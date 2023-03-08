import React, { useContext } from 'react'
import "./items.css"
import AddtoCartButton from './AddtoCartButton';
import { cartContext } from '../Carro/CartProvider';


export const ProductItem = ({item}) => {
  const [cart, setCart]  = useContext(cartContext);
    //console.log(cart)
    
    const { url, name, price } = item;
  return (
    <div className='productCage'>
    <img className='productPhoto' src={url} alt={name} />
    <div>
      <p className='description'>{name}</p>
      <p className='description'>{price}</p>
    </div>
      <AddtoCartButton item={item}/>
  </div>
  )
}

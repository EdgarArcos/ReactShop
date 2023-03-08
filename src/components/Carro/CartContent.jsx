import React, {useContext} from 'react'
import { cartContext } from './CartProvider'
import ItemCart from './ItemCart';

export default function CartContent() {
    const [cart]  = useContext(cartContext);
    //console.log(cart);
  return (
    <>
    <div>
        {
        cart.map((product,id) =>{
            //console.log(product);
            return <ItemCart id={id} product={product}/>
        })
        } 
    </div>
    </>
  )
}

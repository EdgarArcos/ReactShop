import React, {useContext} from 'react'
import { cartContext } from './CartProvider'
import ItemCart from './ItemCart';
import TotalCart from './TotalCart';

export default function CartContent() {
    const [cart]  = useContext(cartContext);
  return (
    <>
    <div>
        {
        cart.map((product,id) =>{
            return(
            <ItemCart id={id} product={product} key={id}/>  
            )
          })
        }
        <TotalCart/>
    </div>
    </>
  )
}

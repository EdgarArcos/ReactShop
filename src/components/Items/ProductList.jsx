import React from 'react'
import { products } from "../../data/products";
import {ProductItem} from './ProductItem';


export const ProductList = () => {
  return (
    <div className='ProductList'>
        {products.map((product)  =>{
            return <ProductItem item={product}/> 
        })}
    </div> 
  )
}

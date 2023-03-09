import { products } from "../../data/products";
import {ProductItem} from './ProductItem';
import { v4 as uuidv4 } from 'uuid';
import Buscador from "../navbar/Buscador";

export const ProductList = () => {
  return (
    <div className='ProductList'>
        {products.map((product)  =>{
            return<ProductItem item={product} key={uuidv4()}/>
        })}
    </div> 
    
  )
}

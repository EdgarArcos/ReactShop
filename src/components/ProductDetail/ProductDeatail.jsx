import React from 'react'
import { useParams} from 'react-router-dom'
import { products } from "../../data/products";
import { Navbar } from "../navbar/Navbar";

export default function ProductDeatail() {
    const {id : productId} = useParams()
    const { name , price, url} = products.find((product) =>{
        return product.id === parseInt(productId)
    })
  return (
    <div>
    <Navbar/>
    <div className='container'>
    <div className='productCage'>
        <h1>{name}</h1>
        <p>{price}</p>
        <img src={url} alt={name} />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis debitis voluptatum quam qui ratione consequatur consectetur modi voluptates quo sint. Nostrum neque, error voluptatem ex hic delectus sint laborum quaerat.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit aperiam excepturi quam expedita error voluptatem earum eos fugit veniam. Autem sint commodi enim corrupti aliquid perspiciatis consequuntur amet praesentium. Facilis?
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam totam quod fugiat quidem quae perferendis, eos animi unde enim, est minima magnam consequatur deleniti voluptates accusamus ullam explicabo veritatis a.
        </p>
        </div>
    </div>
    </div>
  )
}

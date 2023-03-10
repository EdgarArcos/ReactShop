import { useContext } from "react";
import { cartContext } from "../Carro/CartProvider";
export default function AddtoCartButton({ item }) {
    const [cart, setCart]  = useContext(cartContext);
    const addToCart = (item) => {
        setCart([...cart,item])
    }
    return <button onClick={() => addToCart(item)}>Add to cart</button>;
}

import { useContext } from "react";
import { MdAddShoppingCart } from "react-icons/md";
import { cartContext } from "../Carro/CartProvider";
export default function AddtoCartButton({ item }) {
    const [cart, setCart]  = useContext(cartContext);
    const addToCart = (item) => {
        setCart([...cart,item])
    }
    return <spam className="icon_item" onClick={() => addToCart(item)}><MdAddShoppingCart/></spam>;
}

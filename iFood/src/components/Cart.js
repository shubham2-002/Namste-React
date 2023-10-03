import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItem = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const handelClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="text-center m-4 p4">
      <h1 className="text-xl font-bold">CART</h1>
      <button
        className="bg-black text-white p-2
         rounded-md
         relative 
        left-64 m-2"
       onClick={()=>handelClearCart()}>
        Clear Cart
      </button>
      <div className="w-5/12 m-auto my-4">
        {cartItem.length===0&& <h1>Cart is Empty Add somthing to cart</h1>}
        <ItemList items={cartItem} />
      </div>
    </div>
  );
};

export default Cart;

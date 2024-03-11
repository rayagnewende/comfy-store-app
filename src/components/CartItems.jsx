import { useSelector } from "react-redux";
import CartItem from "./CartItem";

const Cartitems = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);

  return (
    <>
      {cartItems.map((item) => {
        return <CartItem key={item.cartID} item={item} />;
      })}
    </>
  );
};

export default Cartitems;

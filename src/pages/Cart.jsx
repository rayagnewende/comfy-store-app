import { useSelector } from "react-redux";
import SectionTitle from "../components/SectionTitle";
import Cartitems from "../components/CartItems";
import CartTotals from "../components/CartTotals";
import { Link } from "react-router-dom";

const Cart = () => {
  const user = useSelector((state) => state.user.user);
  const numItemsInCart = useSelector((state) => state.cart.numItemInCart);
  console.log(numItemsInCart);
  if (numItemsInCart <= 0) {
    return <SectionTitle text="the cart is empty for this moment!" />;
  }

  return (
    <>
      <SectionTitle text="Shoppint cart" />
      <div className="mt-8 grid gap-8 lg:grid-cols-12">
        <div className="lg:col-span-8">
          <Cartitems />
        </div>
        {user ? (
          <div className="lg:col-span-4">
            <CartTotals />
            {user ? (
              <Link to="/checkout" className="btn btn-primary w-full">
                Proceed to validation
              </Link>
            ) : (
              <Link className="btn btn-primary w-full">
                Login before go to checkout
              </Link>
            )}
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default Cart;

import { useSelector } from "react-redux";
import SectionTitle from "../components/SectionTitle";
import { CartTotals, CheckoutForm } from "../components";
import { toast } from "react-toastify";
import { redirect } from "react-router-dom";

export const loader = (store) => () => {
  const user = store.getState().user.user;
  if (!user) {
    toast.success("You need to sigin before see the checkout!");
    return redirect("/login");
  }
  return null;
};

const Checkout = () => {
  const cartTotal = useSelector((state) => state.cart.cartTotal);
  console.log(cartTotal);
  if (cartTotal === 0) {
    return <SectionTitle text="Your cart is empty!" />;
  }
  return (
    <>
      <SectionTitle text="Check your place!" />
      <div className="mt-8 grid gap-8 md:grid-cols-2 items-start">
        <CheckoutForm />

        <CartTotals />
      </div>
    </>
  );
};

export default Checkout;

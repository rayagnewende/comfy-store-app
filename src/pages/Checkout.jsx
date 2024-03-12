import { useSelector } from "react-redux";
import SectionTitle from "../components/SectionTitle";
import { CartTotals, CheckoutForm } from "../components";
import { toast } from "react-toastify";
import { redirect } from "react-router-dom";

export const loader = (store) => async () => {
  const user = store.getState().user;
  if (!user) {
    toast.warn("you must to logged in the checkout");
    return redirect("/login");
  }
};

const Checkout = () => {
  const cartTotal = useSelector((state) => state.user.cartTotal);
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

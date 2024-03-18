import { Form, redirect } from "react-router-dom";
import FormInput from "./FormInput";
import SubmitBtn from "./SubmitBtn";
import { CustomFetch, formatPrice } from "../utils";
import { clearCart } from "../features/cart/cartSlice";
import { toast } from "react-toastify";

export const action =
  (store) =>
  async ({ request }) => {
    const formData = await request.formData();
    const { name, address } = Object.fromEntries(formData);

    const user = store.getState().user.user;
    const { cartItems, orderTotal, numItemInCart } = store.getState().cart;

    const info = {
      name,
      address,
      chargeTotal: orderTotal,
      orderTotal: formatPrice(orderTotal),
      cartItems,
      numItemsInCart: numItemInCart,
    };

    try {
      const response = await CustomFetch.post(
        "/orders",
        { data: info },
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      );
      console.log(response);
      store.dispatch(clearCart());
      toast.success("order place successfully!!");
      return redirect("/orders");
    } catch (error) {
      const errorMessage =
        error?.response?.data?.error?.message ||
        "there was ann errror placing your order";
      toast.error(errorMessage);
      if (error.response.status === 401) return redirect("/login");
    }
    return null;
  };

const CheckoutForm = () => {
  return (
    <>
      <Form method="POST" className="flex flex-col gap-y-4">
        <h4 className="font-medium text-xl capitalize">Shipping information</h4>
        <FormInput type="text" label="Fist name" name="name" />
        <FormInput type="" label="Address" name="address" />
        <div className="mt-4">
          <SubmitBtn text="Place  your order" />
        </div>
      </Form>
    </>
  );
};

export default CheckoutForm;

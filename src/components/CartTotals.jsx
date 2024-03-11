import { useSelector } from "react-redux";
import { formatPrice } from "../utils";

const CartTotals = () => {
  const { cartTotal, shipping, tax, orderTotal } = useSelector(
    (state) => state.cart
  );

  return (
    <div className="card bg-base-200">
      <div className="card-body">
        <div className="flex justify-between pb-2">
          <span>CartTotal</span>
          <span className="font-medium">{formatPrice(cartTotal)}</span>
        </div>
        <div className="flex justify-between pb-2">
          <span>Shipping</span>
          <span className="font-medium">{shipping}</span>
        </div>
        <div className="flex justify-between pb-2">
          <span>Tax</span>
          <span className="font-medium">{formatPrice(tax)}</span>
        </div>
        <div className="flex justify-between pb-2">
          <span>Total order:</span>
          <span className="font-medium">{formatPrice(orderTotal)}</span>
        </div>
      </div>
    </div>
  );
};

export default CartTotals;

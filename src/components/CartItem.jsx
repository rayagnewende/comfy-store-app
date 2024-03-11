import { useDispatch } from "react-redux";
import { formatPrice, generateAmountOptions } from "../utils";
import { editItem, removeItem } from "../features/cart/cartSlice";

// eslint-disable-next-line react/prop-types
const CartItem = ({ item }) => {
  // eslint-disable-next-line react/prop-types
  const { cartID, amount, image, price, company, productColor, title } = item;
  const dispatch = useDispatch();

  const removeItemFromCart = () => {
    dispatch(removeItem({ cartID }));
  };

  const handleSelect = (e) => {
    dispatch(editItem({ cartID, amount: e.target.value }));
  };

  return (
    <article
      key={cartID}
      className="mb-12 flex flex-col gap-y-4  sm:flex-row flex-wrap border-b border-base-300 pb-6 last:border-b-0"
    >
      {/* IMAGE */}
      <img
        src={image}
        alt={title}
        className="h-24 w-24 rounded-lg sm:h-32 sm:w-32 object-cover"
      />
      {/* INFO */}
      <div className="sm:ml-16 sm:w-48 ">
        {/* TITLE 
       COMPANY 
       COLOR  */}
        <h3 className="capitalize font-medium ">{title}</h3>
        <h4 className="mt-2 capitalize text-sm text-neutral-content">
          {company}
        </h4>
        <p className="mt-4 text-sm capitalize flex items-center gap-x-2">
          <span
            className="badge badge-sm"
            style={{ backgroundColor: productColor }}
          ></span>
        </p>
      </div>
      <div className="sm:ml-24">
        <div className="form-control max-w-xs">
          <label htmlFor="amount" className="label p-0">
            <span className="label-text">Amount</span>
          </label>
          <select
            name="amount"
            id="amount"
            value={amount}
            onChange={handleSelect}
            className="mt-2 select select-base select-bordered select-xs"
          >
            {generateAmountOptions(amount + 5)}
          </select>
          <button
            className="mt-2 link link-primary link-hover text-sm"
            onClick={removeItemFromCart}
          >
            remove
          </button>
        </div>
      </div>
      <p className="font-medium sm:ml-auto">{formatPrice(price)}</p>
    </article>
  );
};

export default CartItem;

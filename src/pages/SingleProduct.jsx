import { Link, useLoaderData } from "react-router-dom";
import { CustomFetch, formatPrice, generateAmountOptions } from "../utils";
import { useState } from "react";

export const loader = async ({ params }) => {
  const response = await CustomFetch(`/products/${params.id}`);
  return { product: response.data.data };
};

const SingleProduct = () => {
  const { product } = useLoaderData();
  const { image, title, price, description, company, colors } =
    product.attributes;
  const amountDollars = formatPrice(price);
  const [productColor, setProductColor] = useState(colors[0]);
  const [amount, setAmount] = useState(1);

  const handleAmount = (e) => {
    setAmount(parseInt(e.target.value));
  };

  return (
    <section>
      <div className="text-md breadcrumbs">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
        </ul>
      </div>
      <div className="mt-6 grid gap-y-8 lg:grid-cols-2 lg:gap-x-16">
        {/* Image */}
        <img
          src={image}
          alt={title}
          className="w-96 h-96 object-cover rounded-lg"
        />
        <div>
          <h2 className="capitalize text-3xl font-bold ">{title}</h2>
          <h4 className="text-xl text-neutral-content font-bold mt-2">
            {company}
          </h4>
          <p className="mt-3 text-xl">{amountDollars}</p>
          <p className="mt-6 leading-8">{description}</p>
          {/* COLORS */}
          <div className="mt-6">
            <h4 className="text-md font-medium tracking-wider">colors</h4>
            <div className="mt-2">
              {colors.map((color) => {
                return (
                  <button
                    key={color}
                    type="button"
                    style={{ backgroundColor: `${color}` }}
                    className={`badge h-6 w-6 mr-2 ${
                      color === productColor && "border-2 border-secondary"
                    }`}
                    onClick={() => setProductColor(color)}
                  ></button>
                );
              })}
            </div>
            {/* AMOUNT */}
            <div className="form-control w-full max-w-xs">
              <label className="label" htmlFor="amount">
                <h4 className="text-md font-medium tracking-wider capitalize">
                  Amount
                </h4>
              </label>
              <select
                id="amount"
                value={amount}
                onChange={handleAmount}
                className="select select-secondary select-bordered select-md"
              >
                {generateAmountOptions(8)}
              </select>
            </div>
            {/* BUTTON */}
            <button className="mt-10 btn btn-secondary btn-md">
              Add to bag
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SingleProduct;

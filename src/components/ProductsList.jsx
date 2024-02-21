import { Link, useLoaderData } from "react-router-dom";
import { formatPrice } from "../utils";

const ProductsList = () => {
  const { products } = useLoaderData();

  console.log(products);
  return (
    <div className="mt-12 grid gap-y-8">
      {products.map((product) => {
        const { image, title, price, company } = product.attributes;
        const amountDollars = formatPrice(price);
        return (
          <Link
            key={product.id}
            to={`/products/${product.id}`}
            className="p-8 rounded-lg flex flex-col sm:flex-row gap-y-4 flex-wrap bg-base-300 shadow-xl hover:shadow-2xl duration-300 group  "
          >
            <img
              src={image}
              alt=""
              className="rounded-xl h-24 w-24 object-cover"
            />
            <div className="ml-0 sm:ml-16">
              <h3 className="capitalize font-medium text-lg">{title}</h3>
              <h4 className="capitalize  text-md text-neutral-content text-lg">
                {company}
              </h4>
            </div>
            <p className="font-medium ml-0 sm:ml-auto text-log">
              {amountDollars}
            </p>
          </Link>
        );
      })}
    </div>
  );
};

export default ProductsList;

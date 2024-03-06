import Filters from "../components/Filters";
import PaginationContainer from "../components/PaginationContainer";
import ProductsContainer from "../components/ProductsContainer";
import { CustomFetch } from "../utils";

const url = "/products";
export const loader = async ({ request }) => {
  const params = Object.fromEntries([
    ...new URL(request.url).searchParams.entries(),
  ]);
  const response = await CustomFetch(url, {
    params
  });
  const products = response.data.data;
  const meta = response.data.meta;
  return { products, meta, params };
};
const Products = () => {
  return (
    <div className="text-4xl">
      <Filters />
      <ProductsContainer />
      <PaginationContainer />
    </div>
  );
};

export default Products;

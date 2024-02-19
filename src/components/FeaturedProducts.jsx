import ProductsGrid from "./ProductsGrid";
import SectionTitle from "./SectionTitle";

const FeaturedProducts = () => {
  return (
    <div className="pt-10">
      <SectionTitle text="Featured products" />
      <ProductsGrid />
    </div>
  );
};

export default FeaturedProducts;

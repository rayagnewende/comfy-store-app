import { Form, Link, useLoaderData } from "react-router-dom";
import FormInput from "./FormInput";
import FormSelect from "./FormSelect";
import FormRange from "./FormRange";
import FormCheckbox from "./FormCheckbox";

const Filters = () => {
  const { meta, params } = useLoaderData();
  console.log(params);
  const { search, category, company, order, shipping, price } = params;
  return (
    <>
      <Form className="bg-base-200 rounded-md px-8 py-4 grid gap-x-4 gap-y-8 sm:grid-cols-2 md:grid-cols-3 ld:grid-cols-4 items-center ">
        {/* SEARCH */}
        <FormInput
          name="search"
          type="search"
          size="input-sm"
          label="search product"
          defaultValue={search}
        />
        {/* CATEGORIES  */}
        <FormSelect
          name="category"
          label="select category"
          list={meta.categories}
          size="select-sm"
          defaultValue={category}
        />
        {/* COMPANIES */}
        <FormSelect
          name="company"
          label="select company"
          list={meta.companies}
          size="select-sm"
          defaultValue={company}
        />
        {/* ORDERS */}
        <FormSelect
          name="order"
          label="sort by"
          list={["a-z", "z-a", "high", "low"]}
          size="select-sm"
          defaultValue={order}
        />
        {/* RANGE INPUT */}
        <FormRange
          name="price"
          label="Select price"
          size="range-sm"
          price={price}
        />
        {/* CHECKBOX */}
        <FormCheckbox
          name="shipping"
          size="checkbox-sm"
          label="free shipping"
          defaultValue={shipping}
        />
        {/* BUTTONS */}
        <button type="submit" className="btn btn-primary btn-sm">
          search
        </button>
        <Link to="/products" className="btn btn-accent btn-sm"></Link>
      </Form>
    </>
  );
};

export default Filters;

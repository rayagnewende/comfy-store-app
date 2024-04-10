import { redirect, useLoaderData } from "react-router-dom";
import { toast } from "react-toastify";
import { CustomFetch } from "../utils";
import SectionTitle from "../components/SectionTitle";
import { OrdersList } from "../components";
import PaginationContainer from "../components/PaginationContainer";

export const loader =
  (store) =>
  async ({ request }) => {
    const user = store.getState().user.user;
    if (!user) {
      toast.warn("You must logged in the view orders!");
      redirect("/login");
    }

    const params = Object.fromEntries([
      ...new URL(request.url).searchParams.entries(),
    ]);
    try {
      const response = await CustomFetch.get("/orders", {
        params,
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });
      return { orders: response.data.data, meta: response.data.meta };
    } catch (error) {
      const errorMessage =
        error?.response?.data?.error?.message ||
        "there was ann errror placing your order";
      toast.error(errorMessage);
      if (error.response.status === 401) return redirect("/login");
    }
    return null;
  };

const Orders = () => {
  const { meta } = useLoaderData();
  if (meta.pagination.total < 1) {
    return <SectionTitle text="Please make an order!" />;
  }
  return (
    <>
      <SectionTitle text="Your orders" />
      <OrdersList />
      <PaginationContainer />
    </>
  );
};

export default Orders;

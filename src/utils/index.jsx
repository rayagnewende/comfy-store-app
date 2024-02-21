import axios from "axios";

const customeComfyURL = "https://strapi-store-server.onrender.com/api";

export const CustomFetch = axios.create({
  baseURL: customeComfyURL,
});

export const formatPrice = (price) => {
  const amountDollars = Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format((price / 100).toFixed(2));

  return amountDollars;
};

export const generateAmountOptions = (number) => {
  return Array.from({ length: number }, (_, index) => {
    const amount = index + 1;
    return (
      <option key={amount } value={amount}>
        {amount}
      </option>
    );
  });
};

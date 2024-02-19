import axios from "axios";

const customeComfyURL = "https://strapi-store-server.onrender.com/api";

export const CustomFetch = axios.create({
  baseURL: customeComfyURL,
});


export const formatPrice = (price) => {
   
  const amountDollars = Intl.NumberFormat('en-US', {
    style:'currency', 
    currency:"USD"
}).format( (price/100).toFixed(2))

return amountDollars; 

}
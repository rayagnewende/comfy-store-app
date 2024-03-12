/* eslint-disable no-unused-vars */
import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
const initialState = {
  cartItems: [],
  numItemInCart: 0,
  cartTotal: 0,
  shipping: 0,
  tax: 0,
  orderTotal: 0,
};
const getLocalStorageData = () => {
  return JSON.parse(localStorage.getItem("cart")) || initialState;
};

const cartSlice = createSlice({
  name: "cart",
  initialState: getLocalStorageData(),
  reducers: {
    addItem: (state, action) => {
      const { product } = action.payload;
      const item = state.cartItems.find((el) => el.cartID === product.cartid);
      if (item) {
        item.amount += product.amount;
      } else {
        state.cartItems.push(product);
      }

      state.numItemInCart += product.amount;
      state.cartTotal += product.price * product.amount;
      cartSlice.caseReducers.calculateTotals(state);
      toast.success("Ajout d'un produit!", {
        position: "top-center",
      });
    },
    clearCart: (state) => {
      localStorage.setItem("cart", JSON.stringify(initialState));
      return initialState;
    },
    removeItem: (state, action) => {
      const { cartID } = action.payload;
      const item = state.cartItems.find((el) => el.cartID === cartID);
      state.cartItems = state.cartItems.filter(
        (el) => el.cartID !== item.cartID
      );
      state.numItemInCart -= item.amount;
      state.cartTotal -= item.price * item.amount;
      cartSlice.caseReducers.calculateTotals(state);
      toast.success("the product removed from cart!");
    },
    editItem: (state, action) => {
      const { cartID, amount } = action.payload;
      const item = state.cartItems.find((el) => el.cartID === cartID);
      state.numItemInCart += amount - item.amount;
      state.cartTotal += item.price * (amount - item.amount);
      item.amount = amount;
      cartSlice.caseReducers.calculateTotals(state);
      toast.success("the product is edited from cart!");
    },
    calculateTotals: (state) => {
      state.tax = 0.1 * state.cartTotal;
      state.orderTotal = state.cartTotal + state.shipping + state.tax;
      localStorage.setItem("cart", JSON.stringify(state));
    },
  },
});

// eslint-disable-next-line no-unused-vars
export const { addItem, removeItem, editItem , clearCart} = cartSlice.actions;

export default cartSlice.reducer;

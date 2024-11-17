import { getCartProductFromLS } from "./getCartProductFromLS";

export const calculatePriceWithTax = () => {
  const cartProducts = getCartProductFromLS();
  const productSubTotal = document.querySelector(".productSubTotal");
  const productFinalTotal = document.querySelector(".productFinalTotal");

  let initialValue = 0;
  let totalProductPrice = cartProducts.reduce(
    (acc, curValue) => curValue.price + acc,
    initialValue
  );
  totalProductPrice = Number(parseFloat(totalProductPrice).toFixed(0));

  productSubTotal.textContent = `₹${totalProductPrice}`;
  productFinalTotal.textContent = `₹${
    totalProductPrice ? totalProductPrice + 50 : 0
  }`;
  return totalProductPrice;
};

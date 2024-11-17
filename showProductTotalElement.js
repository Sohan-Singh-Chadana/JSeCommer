import { getCartProductFromLS } from "./getCartProductFromLS";

export const showProductTotalElement = () => {
  const cartProducts = getCartProductFromLS();
  const productCartTotalElement = document.querySelector(
    ".productCartTotalElement"
  );

  if (cartProducts.length > 0) {
    productCartTotalElement.style.visibility = "visible";
  } else {
    productCartTotalElement.style.visibility = "hidden";
  }
};

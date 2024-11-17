import { getCartProductFromLS } from "./getCartProductFromLS";

export const fetchQuantityFromCartLS = (id, price) => {
  // Retrieve cart products from local storage
  let cartProducts = getCartProductFromLS();

  // Check if product already exists in cart
  let existingProducts = cartProducts.find((curProd) => curProd.id === id);
  let quantity = 1;

  // Update quantity and price if product already exists
  if (existingProducts) {
    quantity = existingProducts.quantity;
    price = existingProducts.price;
  }

  return { quantity, price };
};

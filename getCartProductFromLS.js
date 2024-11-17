import { updateCartValue } from "./updateCartValue";

export const getCartProductFromLS = () => {
  // Retrieve cart products from local storage
  let cartProducts = localStorage.getItem("cartProductLS");
  if (!cartProducts) {
    // Return empty array if no cart products are found
    return [];
  }

  // Parse cart products from JSON string to JavaScript object
  cartProducts = JSON.parse(cartProducts);

  // Update cart value with the retrieved cart products
  updateCartValue(cartProducts);

  // Return the retrieved cart products
  return cartProducts;
};

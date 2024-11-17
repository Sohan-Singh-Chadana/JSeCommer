import { getCartProductFromLS } from "./getCartProductFromLS";
import { calculatePriceWithTax } from "./calculatePriceWithTax";
import { updateCartValue } from "./updateCartValue";
import { showToast } from "./showToast";
import { showProductTotalElement } from "./showProductTotalElement";

export const removeTheCardFromCart = (id) => {
  // Retrieve the current cart products from local storage
  let cartProducts = getCartProductFromLS();

  // Filter out the product with the specified ID
  cartProducts = cartProducts.filter((product) => product.id !== id);

  // Update the cart products in local storage
  localStorage.setItem("cartProductLS", JSON.stringify(cartProducts));

  // Get the HTML element corresponding to the product to be removed
  const removeDiv = document.getElementById(`card${id}`);

  // If the element exists, remove it from the DOM
  if (removeDiv) {
    removeDiv.remove();
  }

  // Update the cart value after removing the product
  updateCartValue(cartProducts);

  // Show the total price of all products in the cart
  showProductTotalElement();

  // Update the total price after removing the product from the cart
  calculatePriceWithTax();

  // Display a toast notification to confirm the removal of the product
  showToast("remove", id);
};

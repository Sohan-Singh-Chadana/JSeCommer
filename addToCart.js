// Initialize cart by retrieving products from local storage
import { getCartProductFromLS } from "./getCartProductFromLS";
import { showToast } from "./showToast";
import { updateCartValue } from "./updateCartValue";

// Load cart products from local storage on page load
getCartProductFromLS();

export const addToCart = (event, id, stock) => {
  // Retrieve products from local storage
  let arrLocalStorageProduct = getCartProductFromLS();

  // Get the current product element
  const currentProductElem = document.querySelector(`#card${id}`);
  let quantity = currentProductElem.querySelector(".productQuantity").innerText;
  let price = currentProductElem.querySelector(".productPrice").innerText;

  // Format price and quantity
  price = price.replace("₹", "");
  price = parseFloat(price * quantity);
  quantity = parseInt(quantity);

  // Check if product already exists in cart
  let existingProducts = arrLocalStorageProduct.find(
    (curProd) => curProd.id === id
  );

  if (existingProducts && quantity > 1) {
    // Update quantity and price of existing product
    quantity = existingProducts.quantity += quantity;
    price = existingProducts.price += price;
    let updateCart = { id, quantity, price };

    updateCart = arrLocalStorageProduct.map((curProd) => {
      return curProd.id === id ? updateCart : curProd;
    });

    // Update local storage with updated cart products
    localStorage.setItem("cartProductLS", JSON.stringify(updateCart));

    showToast("update", id);
  }

  if (existingProducts) {
    return false;
  }

  // Add new product to cart
  arrLocalStorageProduct.push({ id, price, quantity });
  // Update local storage with new cart products
  localStorage.setItem("cartProductLS", JSON.stringify(arrLocalStorageProduct));

  // Update cart value display
  updateCartValue(arrLocalStorageProduct);

  // Display toast notification for added product
  showToast("add", id);
};

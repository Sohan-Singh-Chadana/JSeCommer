import { getCartProductFromLS } from "./getCartProductFromLS";
import { calculatePriceWithTax } from "./calculatePriceWithTax";

export const incrementDecrement = (event, id, stock, price) => {
  const currentCardElement = document.querySelector(`#card${id}`);
  const productQuantity = currentCardElement.querySelector(".productQuantity");
  const productPrice = currentCardElement.querySelector(".productPrice");

  let quantity = 1;
  let localStoragePrice = 0;

  // Retrieve the current cart products from local storage
  const localCartProducts = getCartProductFromLS();
  const existingProducts = localCartProducts.find(
    (curProd) => curProd.id === id
  );

  if (existingProducts) {
    quantity = existingProducts.quantity;
    localStoragePrice = existingProducts.price;
  } else {
    localStoragePrice = price;
  }

  if (event.target.className === "cartIncrement") {
    if (quantity < stock) {
      quantity += 1;
    } else if (quantity === stock) {
      quantity = stock;
      localStoragePrice = price * stock;
    }
  }

  if (event.target.className === "cartDecrement") {
    if (quantity > 1) {
      quantity -= 1;
    }
  }

  localStoragePrice = price * quantity;
  localStoragePrice = Number(localStoragePrice.toFixed(2));

  let updatedCart = { id, quantity, price: localStoragePrice };

  updatedCart = localCartProducts.map((curProd) => {
    return curProd.id === id ? updatedCart : curProd;
  });

  localStorage.setItem("cartProductLS", JSON.stringify(updatedCart));

  //   also we need to reflect the changes on the screen too
  productQuantity.innerText = quantity;
  productPrice.innerText = `₹${localStoragePrice}`;

  // Update the total price with tax after quantity change
  calculatePriceWithTax();
};

import { getCartProductFromLS } from "./getCartProductFromLS";
import products from "./api/products.json";
import { fetchQuantityFromCartLS } from "./fetchQuantityFromCartLS";
import { removeTheCardFromCart } from "./removeTheCardFromCart";
import { incrementDecrement } from "./incrementDecrement";
import { calculatePriceWithTax } from "./calculatePriceWithTax";
import { showProductTotalElement } from "./showProductTotalElement";

const cartProducts = getCartProductFromLS();

const filterProducts = products.filter((curProduct) => {
  return cartProducts.some((cartProduct) => cartProduct.id === curProduct.id);
});

const productCartContainer = document.querySelector("#productCartContainer");
const productCartTemplate = document.querySelector("#productCartTemplate");

const showCartProduct = () => {
  filterProducts.forEach((cartProduct, i) => {
    const { category, id, image, name, stock, price } = cartProduct;

    // Clone the product cart template to create a new cart product element
    const cartProductClone = document.importNode(
      productCartTemplate.content,
      true
    );

    // Fetch quantity and price from local storage for the current product
    const lSActualData = fetchQuantityFromCartLS(id, price);

    // Update cart product clone elements with actual data
    cartProductClone
      .querySelector("#cardValue")
      .setAttribute("id", `card${id}`);
    cartProductClone.querySelector(".category").innerText = category;
    cartProductClone.querySelector(".productImage").src = image;
    cartProductClone.querySelector(".productImage").alt = name;
    cartProductClone.querySelector(".productName").innerText = name;
    cartProductClone.querySelector(
      ".productPrice"
    ).innerText = `₹${lSActualData.price}`;
    cartProductClone.querySelector(".productQuantity").innerText =
      lSActualData.quantity;

    // Add event listener to remove button
    cartProductClone
      .querySelector(".remove-to-cart-button")
      .addEventListener("click", () => {
        //* Remove product from cart
        removeTheCardFromCart(id);
      });

    cartProductClone
      .querySelector(".stockElement")
      .addEventListener("click", (event) => {
        incrementDecrement(event, id, stock, price);
      });

    // Calculate the total price of all products in the cart
    calculatePriceWithTax();

    productCartContainer.append(cartProductClone);

    // Show the total price of all products in the cart
    showProductTotalElement();
  });
};
showCartProduct();

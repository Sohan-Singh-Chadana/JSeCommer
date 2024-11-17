import { addToCart } from "./addToCart";
import { homeQuantityToggle } from "./homeQuantityToggle";

const productContainer = document.querySelector("#productContainer");
const productTemplate = document.querySelector("#productTemplate");

// Function to display product container with product information
export const showProductContainer = (products) => {
  // Check if products exist
  if (!products) {
    return false;
  }

  // Iterate through each product
  products.forEach((curProd) => {
    // Extract product properties
    const { brand, category, description, id, image, name, price, stock } =
      curProd;

    // Clone product template
    // const productClone = productTemplate.content.cloneNode(true);
    const productClone = document.importNode(productTemplate.content, true);

    // Update product clone with product information
    productClone.querySelector("#cardValue").setAttribute("id", `card${id}`);
    productClone.querySelector(".category").innerText = category;
    productClone.querySelector(".productName").textContent = name;
    productClone.querySelector(".productImage").src = image;
    productClone.querySelector(".productImage").alt = name;
    productClone.querySelector(".productDescription").textContent = description;
    productClone.querySelector(".productPrice").textContent = `₹${price}`;
    productClone.querySelector(".productActualPrice").textContent = `₹${
      price * 4
    }`;
    productClone.querySelector(".productStock").textContent = stock;

    // Get stock element and add to cart button
    const stockElement = productClone.querySelector(".stockElement");
    const addToCartBtn = productClone.querySelector(".add-to-cart-button");

    // Add event listeners to stock element and add to cart button
    stockElement.addEventListener("click", (event) => {
      homeQuantityToggle(event, id, stock);
    });

    addToCartBtn.addEventListener("click", (event) => {
      addToCart(event, id, stock);
    });

    // Append product clone to product container
    productContainer.append(productClone);
  });
};

```javascript
let quantity = 1;

stockElement.addEventListener("click", (e) => {
  let productQuantity = stockElement.querySelector(".productQuantity");

  if (e.target.classList.contains("cartIncrement")) {
    quantity = quantity < stock ? quantity + 1 : stock;
  } else if (e.target.classList.contains("cartDecrement")) {
    quantity = quantity > 1 ? quantity - 1 : 1;
  }

  productQuantity.innerText = quantity;
});
```

\***\* Price and quantity update in Add to cart page \*\***

```javascript
cartProducts.forEach((curProduct) => {
  if (curProduct.id === id) {
    cartProductClone.querySelector(".productPrice").innerText =
      curProduct.price;
    cartProductClone.querySelector(".productQuantity").innerText =
      curProduct.quantity;
  }
});
```

**\* \* Update quantity and Price in cartPage \*\***

```javascript
export const incrementDecrement = (event, id, stock, singlePrice) => {
  const cartProducts = getCartProductFromLS();
  const currentCardElement = document.querySelector(`#card${id}`);
  const productQuantity = currentCardElement.querySelector(".productQuantity");
  const productPrice = currentCardElement.querySelector(".productPrice");

  let quantity = parseInt(productQuantity.textContent);
  let price = productPrice.textContent;
  price = parseFloat(price.replace("₹", ""));

  if (event.target.className === "cartIncrement") {
    if (quantity < stock) {
      quantity += 1;
      price += singlePrice;
    } else if (quantity === stock) {
      quantity = stock;
    }
  }

  if (event.target.className === "cartDecrement") {
    if (quantity > 1) {
      quantity -= 1;
      price -= singlePrice;
    }
  }

  const existingProduct = cartProducts.find((product) => product.id === id);

  if (existingProduct) {
    quantity = existingProduct.quantity = quantity;
    price = existingProduct.price = Number(parseFloat(price).toFixed(2));
    let updateCart = { id, price, quantity };

    updateCart = cartProducts.map((curProduct) => {
      return curProduct.id === id ? updateCart : curProduct;
    });

    localStorage.setItem("cartProductLS", JSON.stringify(updateCart));
  }

  //   console.log(singlePrice);
  // console.log(quantity);
  // console.log(existingProduct);
  //   console.log(price);
  //   console.log(cartProducts);

  calculatePriceWithTax();

  productPrice.innerText = `₹${price}`;
  productQuantity.innerText = quantity;
};
```

```javascript
if (operation === "add") {
  toast.textContent = `Product with Id ${id} has been added.`;
} else if (operation === "remove") {
  toast.textContent = `Product with Id ${id} has been removed.`;
} else if (operation === "update") {
  toast.textContent = `Product with Id ${id} has been updated.`;
}
```

**update cart product Total Price but not my code my code is current working file this code only my reference code from thapa Technical youtube channel**

```javascript
import { getCartProductFromLS } from "./getCartProducts";

export const updateCartProductTotal = () => {
  let productSubTotal = document.querySelector(".productSubTotal");
  let productFinalTotal = document.querySelector(".productFinalTotal");

  let localCartProducts = getCartProductFromLS();
  let initialValue = 0;
  let totalProductPrice = localCartProducts.reduce((accum, curElem) => {
    let productPrice = parseInt(curElem.price) || 0;
    return accum + productPrice;
  }, initialValue);
  //   console.log(totalProductPrice);

  productSubTotal.textContent = `₹${totalProductPrice}`;
  productFinalTotal.textContent = `₹${totalProductPrice + 50}`;
};
```

**_ insertAdjElement: insertAdjacentHTML() method_**

The insertAdjacentHTML() method of the Element interface parses the specified text as HTML or XML and inserts the resulting nodes into the DOM tree at a specified position.

This is a [reference link](https://developer.mozilla.org/en-US/docs/Web/API/Element/insertAdjacentHTML)

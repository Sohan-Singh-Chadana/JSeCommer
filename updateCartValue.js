const cartValue = document.querySelector("#cartValue");

export const updateCartValue = (cartProducts) => {
  // Update the cart value HTML with the number of products in the cart
  return (cartValue.innerHTML = ` <i class="fa-solid fa-cart-shopping"> ${cartProducts.length} </i>`);
};

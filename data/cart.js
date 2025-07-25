export const cart = [];

export function addToCart(productId) {
  const quantitySelector = document.querySelector(`.js-quantity-selector-${productId}`);
  const selectedQuantity = Number(quantitySelector.value);

  let matchingItem;

  cart.forEach((cartItem) => {
    if (productId === cartItem.productId) {
      matchingItem = cartItem;
      return;
    }
  });

  if (matchingItem) {
    matchingItem.quantity += selectedQuantity;
  } else {
    cart.push({
      productId,
      quantity: selectedQuantity,
    });
  }
}
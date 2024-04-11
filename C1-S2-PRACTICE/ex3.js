const PRODUCTS = [
  { id: 1, name: "Apple", price: 2.5 },
  { id: 2, name: "Banana", price: 1.5 },
  { id: 3, name: "Orange", price: 3 },
  { id: 4, name: "Rice", price: 1.5 },
  { id: 5, name: "Chocolate", price: 3 },
];

const SHOPPING_CART = [
  { id: 1, quantity: 2 },
  { id: 3, quantity: 1 },
];

function getCartTotalAmount() {
  let result = 0;
  SHOPPING_CART.forEach(
    item => {
      itemPrice = PRODUCTS.find(product => product.id === item.id).price;
      result += itemPrice * item.quantity;
    }
  );
  return result;
}

console.log(getCartTotalAmount());

function addProductToCart(productId) {
  const product = SHOPPING_CART.find(item => item.id === productId);
  if (product) {
    product.quantity += 1;
  } else SHOPPING_CART.push({'id': productId, quantity: 1});
}

addProductToCart(2);
console.log(SHOPPING_CART);

function removeProductFromCart(productId) {
  const product = SHOPPING_CART.find((item) => item.id === productId);
  if (product) {
    if (product.quantity >=2) product.quantity -= 1
    else SHOPPING_CART.splice(SHOPPING_CART.indexOf(product), 1);
  }
}

removeProductFromCart(4);
console.log(SHOPPING_CART);
// function notImplemented() {
//   throw new Error('Корзина ещё не реализована. Сначала прочитайте тесты.');
// }

function addToCart(cart, product, quantity) {
if (quantity > product.stock) {
  throw new RangeError('Not Enough stock');
}
if (quantity <= 0) {
  throw new RangeError('Cannot add 0 item');
}
const existingItem = cart.find(item => item.id === product.id);
if (existingItem) {
  const newQuantity = existingItem.quantity + quantity;

  if (newQuantity > product.stock) {
    throw new RangeError('Not Enough stock');
  }

  return cart.map(item => item.id === product.id ? {...item, quantity:newQuantity} : item);
}
return [
  ...cart, {
    ...product,
    quantity,
  },
];
}
function changeQuantity(cart, product, quantity) {
  const existingItem = cart.find(item => item.id === product);
if (!existingItem) {
  return cart;
}
    if (quantity > existingItem.stock){
    throw new RangeError('Not enough stock');
  }
    if (quantity <= 0){
    throw new RangeError('Quantity cannot be zero');
  }
    return cart.map(item => item.id === product ? {...item, quantity:quantity} : item);
  }


function removeFromCart() { return notImplemented(); }
function calculateCartSubtotal() { return notImplemented(); }
function calculateOrderTotal() { return notImplemented(); }

const cartApi = { addToCart, changeQuantity, removeFromCart, calculateCartSubtotal, calculateOrderTotal };

if (typeof module !== 'undefined') module.exports = cartApi;
if (typeof window !== 'undefined') window.cartApi = cartApi;

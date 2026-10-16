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


function removeFromCart(cart, product) {
const existingItem = cart.find(item => item.id === product);
if (!existingItem) {
  return cart;
}
return cart.filter(item => item.id !== product);
}





function calculateCartSubtotal(cart) {
return cart.reduce((total, item) => total + item.price * item.quantity, 0);
}





function calculateOrderTotal(cart, code) {
const subtotal = calculateCartSubtotal(cart);
let delivery = 30000;
let discount = 0;
let total = 0;

if (code !== 'SAVE10' && subtotal < 49999) {
  total = subtotal + delivery;
}
if (subtotal >= 50000) {
  total=subtotal;
  delivery = 0;
}
if (code === 'SAVE10' && subtotal >= 20000) {
  discount = subtotal * 0.1;
  total = (subtotal - discount) + delivery;
}
if (code === 'SAVE10' && subtotal <20000) {
  total = subtotal + delivery;
}
return {subtotal, discount, delivery, total};

  }

const cartApi = { addToCart, changeQuantity, removeFromCart, calculateCartSubtotal, calculateOrderTotal };

if (typeof module !== 'undefined') module.exports = cartApi;
if (typeof window !== 'undefined') window.cartApi = cartApi;

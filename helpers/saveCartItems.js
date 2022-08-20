const saveCartItems = (value) => localStorage.setItem('cartItem', value);

if (typeof module !== 'undefined') {
  module.exports = saveCartItems;
}

const getSavedCartItems = () => {
  try {
   return localStorage.getItem('cartItem');
  } catch (error) {
    throw new Error('deu ruim!');
  }
};

if (typeof module !== 'undefined') {
  module.exports = getSavedCartItems;
}

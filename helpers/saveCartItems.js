const saveCartItems = (value) => {
  try {

    localStorage.setItem('cartItem', value);

  } catch (error) {
    throw new Error('mensagem esperada aqui')
  }
}

if (typeof module !== 'undefined') {
  module.exports = saveCartItems;
}

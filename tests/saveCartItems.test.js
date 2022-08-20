const localStorageSimulator = require('../mocks/localStorageSimulator');
const saveCartItems = require('../helpers/saveCartItems');
const li = document.querySelector('.cart__item');
localStorageSimulator('setItem');

describe('3 - Teste a função saveCartItems', () => {

  it('testa se saveCartItems for chamada com o augumento (<ol><li>Item</li></ol>)', () => {
    saveCartItems('<ol><li>Item</li></ol>');

    expect(localStorage.setItem).toBeCalled();
  })
  it('teste se saveCartItems e chamada com os valores de parâmetro passados corretos', () => {
    saveCartItems('<ol><li>Item</li></ol>');

    expect(localStorage.setItem).toBeCalledWith('cartItem', '<ol><li>Item</li></ol>');
  })
  it('testa se saveCartItem é uma função', () => {
    saveCartItems('<ol><li>Item</li></ol>');
    expect(typeof saveCartItems).toBe('function');
  })
});

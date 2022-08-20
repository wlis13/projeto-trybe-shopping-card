const localStorageSimulator = require('../mocks/localStorageSimulator');
const getSavedCartItems = require('../helpers/getSavedCartItems');

localStorageSimulator('getItem');

describe('4 - Teste a função getSavedCartItems', () => {
  it('testa se saveCartItems for chamada com o augumento (<ol><li>Item</li></ol>)', () => {
    getSavedCartItems();

    expect(localStorage.getItem).toBeCalled();
  })
  it('teste se saveCartItems e chamada com os valores de parâmetro passados corretos', () => {
    getSavedCartItems();

    expect(localStorage.getItem).toBeCalledWith('cartItem');
  })
});

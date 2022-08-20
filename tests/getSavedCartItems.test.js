const localStorageSimulator = require('../mocks/localStorageSimulator');
const getSavedCartItems = require('../helpers/getSavedCartItems');

localStorageSimulator('getItem');

describe('4 - Teste a função getSavedCartItems', () => {
  it('testa se getsaveCartItems for chamada com o augumento ', () => {
    getSavedCartItems();

    expect(localStorage.getItem).toBeCalled();
  })
  it('teste se getsaveCartItems e chamada com o parâmetro correto', () => {
    getSavedCartItems();

    expect(localStorage.getItem).toBeCalledWith('cartItem');
  })
});

require('../mocks/fetchSimulator');
const { fetchProducts } = require('../helpers/fetchProducts');
const computadorSearch = require('../mocks/search');

describe('1 - Teste a função fetchProducts', () => {
it('testa se fetchProducts é uma função', () => {
  expect(typeof fetchProducts).toBe('function');
})
it('testa se a função fetch é chamada ', async () => {
  await fetchProducts('computador');
  expect(fetch).toBeCalled();
})
it('testa se a fetch é chamada com a url certa', async () => {
  const url = 'https://api.mercadolibre.com/sites/MLB/search?q=computador';
  await fetchProducts('computador');
  expect(fetch).toBeCalledWith(url)
})
it('testa se a função fetchProducts é igual a estrutura da função computadorSearch', async () => {
  const funcao = await fetch('https://api.mercadolibre.com/sites/MLB/search?q=computador')
  .then((responseApi) => responseApi.json());
  expect(funcao).toEqual(computadorSearch)
})
it('testa se a função retor o erro esperado', async () => {
  try {
    await fetchProducts();
  } catch (error) {
    expect(error).toEqual(new Error('You must provide an url'));
  }
  
})
});

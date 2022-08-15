require('../mocks/fetchSimulator');
const { fetchItem } = require('../helpers/fetchItem');
const item = require('../mocks/item');

describe('2 - Teste a função fetchItem', () => {
  it('testa se fetchItem é uma função', () => {
    expect(typeof fetchItem).toBe('function')
  })
  it('testa se fetch foi chamada corretamente', async () => {
    
    await fetchItem('MLB1615760527')
    expect(fetch).toBeCalled()
  })
  it('testa se o endpoint está correto', async () => {
    const url = 'https://api.mercadolibre.com/items/MLB1615760527'
await fetchItem('MLB1615760527')
expect(fetch).toBeCalledWith(url)
  })
  it('testa se a estrutura de dados está correta', async () => {
const funcao = await fetch('https://api.mercadolibre.com/items/MLB1615760527')
.then((response) => response.json())
expect(funcao).toEqual(item)
  })
  it('testa se mensagem de erro está correta', async () => {
    try {
     await fetchItem()
    } catch (error) {
      expect(error).toEqual(new Error('You must provide an url'))
    }
  })
});

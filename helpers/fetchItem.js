const fetchItem = async (idProduto) => {
  try {
    const url = `https://api.mercadolibre.com/items/${idProduto}`;
    const requisicao = await fetch(url);
    const resposta = await requisicao.json();
    return resposta;
  } catch (error) {
    throw new Error('You must provide an url');
  }
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchItem,
  };
}

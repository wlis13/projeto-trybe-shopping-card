const fetchProducts = (QUERY) => fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${QUERY}`)
  .then((responseApi) => responseApi.json())
  .then((objectApi) => objectApi.results)
  .catch(() => new Error('You must provide an url'));

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}

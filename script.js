const sectionItems = document.querySelector('.items');
const ol = document.querySelector('.cart__items');
const preco = document.querySelector('.total-price');
const container = document.querySelector('.container');

const allProducts = () => fetchProducts('computador');

const createProductImageElement = (imageSource) => {
  const img = document.createElement('img');
  img.className = 'item__image';
  img.src = imageSource;
  return img;
};

const createCustomElement = (element, className, innerText) => {
  const e = document.createElement(element);
  e.className = className;
  e.innerText = innerText;
  return e;
};

const createProductItemElement = ({ sku, name, image }) => {
  const section = document.createElement('section');
  section.className = 'item';

  section.appendChild(createCustomElement('span', 'item__sku', sku));
  section.appendChild(createCustomElement('span', 'item__title', name));
  section.appendChild(createProductImageElement(image));
  section.appendChild(
    createCustomElement('button', 'item__add', 'Adicionar ao carrinho!'),
  );
  return section;
};

const getSkuFromProductItem = (item) =>
  item.querySelector('span.item__sku').innerText;

const cartItemClickListener = (event) => {
  const elementoClicado = event.target;
  event.stopPropagation();
  elementoClicado.remove();
};

const createCartItemElement = ({ sku, name, salePrice }) => {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.addEventListener('click', cartItemClickListener);
  return li;
};

const sectionItem = document.querySelector('.item');

const verificandoImages = async () => {
  const products = await allProducts();

  products.forEach((itens) => {
    const objectProducts = {
      sku: itens.id,
      name: itens.title,
      image: itens.thumbnail,
    };
    sectionItems.appendChild(createProductItemElement(objectProducts));
  });
};
verificandoImages();

const criandoBotao = async () => {
  const products = await allProducts();
  let btnInsert;
  products.forEach((itens) => {
    const qualquer = '';
    createProductItemElement(qualquer);
    btnInsert = document.querySelectorAll('.item__add');
  });
  return btnInsert;
};

const productInfoCart = async () => {
  const btn = await criandoBotao();
  btn.forEach((itens) => {
    itens.addEventListener('click', async (event) => {
      const todasInfoProduct = await fetchItem(
        event.target.parentNode.childNodes[0].innerText,
      );
      const { id, title, price } = todasInfoProduct;
      const objectInfoProduct = { sku: id, name: title, salePrice: price };
      ol.appendChild(createCartItemElement(objectInfoProduct));
    });
  });
};
productInfoCart();

const btnRemove = document.querySelector('.empty-cart');

btnRemove.addEventListener('click', () => {
  ol.innerHTML = '';
});

const recuperarLis = () => {
  const li = document.querySelectorAll('.cart__item');
  li.forEach((itens) => {
    itens.addEventListener('click', cartItemClickListener);
  });
};

const divPai = document.querySelector('.parent-div');
function loading() {
  const load = document.createElement('p');
  load.innerText = 'carregando...';
  load.className = 'loading';
  container.appendChild(load);
}
loading();

function ocultar() {
 document.querySelector('.loading').remove();
}

window.onload = async () => {
  await fetchProducts('computador');
  ocultar();
};

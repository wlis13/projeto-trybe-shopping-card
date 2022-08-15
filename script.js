const sectionItems = document.querySelector('.items');
const ol = document.querySelector('.cart__items');
const allProducts = async () => await fetchProducts('computador');

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

const createProductImageElement = (imageSource) => {
  const img = document.createElement('img');
  img.className = 'item__image';
  img.src = imageSource;
  return img;
};

const imageNaTela = async () => {
  const div = document.createElement('div');
  sectionItems.appendChild(div);
  div.innerHTML = await verificandoImages();
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
    createCustomElement('button', 'item__add', 'Adicionar ao carrinho!')
  );
  return section;
};

const getSkuFromProductItem = (item) =>
  item.querySelector('span.item__sku').innerText;

const cartItemClickListener = (event) => {
  // coloque seu código aqui
};

const createCartItemElement = ({ sku, name, salePrice }) => {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.addEventListener('click', cartItemClickListener);
  return li;
};

window.onload = () => { };

const KEY = "products";

export const getProducts = () =>
  JSON.parse(localStorage.getItem(KEY)) || [];

export const addProduct = (product) => {
  const products = getProducts();
  products.push(product);
  localStorage.setItem(KEY, JSON.stringify(products));
};

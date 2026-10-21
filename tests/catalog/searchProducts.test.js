const products = require('../../src/data/products');
const { searchProducts } = require('../../src/catalog');

describe('searchProducts', () => {
  test("'Наушники' возвращает товар с ID 1", () => {
    const getProductsByQuery = searchProducts(products, 'Наушники');
    expect(getProductsByQuery.map(p => p.id)).toEqual([1]);
  });
  test("'Чистый код' возвращает товар с ID 6", () => {
    const getProductsByQuery = searchProducts(products, 'Чистый код');
    expect(getProductsByQuery.map(p => p.id)).toEqual([6]);
  });
  test("'Настольная лампа' возвращает товар с ID 4", () => {
    const getProductsByQuery = searchProducts(products, 'Настольная лампа');
    expect(getProductsByQuery.map(p => p.id)).toEqual([4]);
  });
  test("'javascript' возвращает товар с ID 3", () => {
    const getProductsByQuery = searchProducts(products, 'javascript');
    expect(getProductsByQuery.map(p => p.id)).toEqual([3]);
  });
  test("'ЧЕХОЛ' возвращает товар с ID 5", () => {
    const getProductsByQuery = searchProducts(products, 'ЧЕХОЛ');
    expect(getProductsByQuery.map(p => p.id)).toEqual([5]);
  });
  test("'наушники' возвращает товар с ID 1", () => {
    const getProductsByQuery = searchProducts(products, 'наушники');
    expect(getProductsByQuery.map(p => p.id)).toEqual([1]);
  });
  test("пустая строка возвращает товары с ID [1, 2, 3, 4, 5, 6]", () => {
    const getProductsByQuery = searchProducts(products, '');
    expect(getProductsByQuery.map(p => p.id)).toEqual([1,2,3,4,5,6]);
  });
  test("строка из пробелов возвращает товары с ID [1, 2, 3, 4, 5, 6]", () => {
    const getProductsByQuery = searchProducts(products, '  ');
    expect(getProductsByQuery.map(p => p.id)).toEqual([1,2,3,4,5,6]);
  });
  test("'\\t\\n' возвращает товары с ID [1, 2, 3, 4, 5, 6]", () => {
    let badStr = '\\t\\n';
    badStr = badStr.replace(/\\t|\\n/g, '');
    const getProductsByQuery = searchProducts(products, badStr);
    expect(getProductsByQuery.map(p => p.id)).toEqual([1,2,3,4,5,6]);
  });
});

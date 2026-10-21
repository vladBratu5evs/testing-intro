const products = require('../../src/data/products');
const { sortProductsByPrice } = require('../../src/catalog');

describe('sortProductsByPrice', () => {
  test("все товары c 'asc' сортируются как [3, 6, 5, 4, 2, 1]", () => {
    const  productsByPrice = sortProductsByPrice(products, 'asc');
    expect(productsByPrice.map(p => p.id)).toEqual([3, 6, 5, 4, 2, 1]);
  });
  test('все товары без направления сортируются как [3, 6, 5, 4, 2, 1]', () => {
    const  productsByPrice = sortProductsByPrice(products, '');
    expect(productsByPrice.map(p => p.id)).toEqual([3, 6, 5, 4, 2, 1]);
  });
  test("товары [1, 3, 4] c 'asc' сортируются как [3, 4, 1]", () => {
    const  productsByPrice = sortProductsByPrice([products[0], products[2], products[3]], 'asc');
    expect(productsByPrice.map(p => p.id)).toEqual([3, 4, 1]);
  });
  test("все товары c 'desc' сортируются как [1, 2, 4, 5, 6, 3]", () => {
    const  productsByPrice = sortProductsByPrice(products, 'desc');
    expect(productsByPrice.map(p => p.id)).toEqual([1, 2, 4, 5, 6, 3]);
  });
  test("товары [3, 1, 4] c 'desc' сортируются как [1, 4, 3]", () => {
    const  productsByPrice = sortProductsByPrice([products[0], products[2], products[3]], 'desc');
    expect(productsByPrice.map(p => p.id)).toEqual([1, 4, 3]);
  });
  test("товары [5, 2, 6] c 'desc' сортируются как [2, 5, 6]", () => {
    const  productsByPrice = sortProductsByPrice([products[1], products[4], products[5]], 'desc');
    expect(productsByPrice.map(p => p.id)).toEqual([2, 5, 6]);
  });
  test("'asc' не меняет исходный массив [1, 3, 4]", () => {
    const newArray = [products[0], products[2], products[3]]
    sortProductsByPrice(newArray, 'asc');
    expect(newArray.map(p => p.id)).toEqual([1, 3, 4]);
  });
  test("'desc' не меняет исходный массив [1, 3, 4]", () => {
    const newArray = [products[0], products[2], products[3]]
    sortProductsByPrice(newArray, 'desc');
    expect(newArray.map(p => p.id)).toEqual([1, 3, 4]);
  });
  test('направление по умолчанию не меняет исходный массив всех товаров', () => {
    const originalOrder = products.map(p => p.id);
    sortProductsByPrice(products, 'asc');
    expect(products.map(p => p.id)).toEqual(originalOrder);
  });
});

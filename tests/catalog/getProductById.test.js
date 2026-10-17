const products = require('../../src/data/products');
const { getProductById } = require('../../src/catalog');

describe('getProductById', () => {
  test('ID 1 возвращает products[0]', () => {
    const resultById = getProductById(products, 1);
    expect(resultById).toEqual(products[0]);
  });
  test('ID 4 возвращает products[3]', () => {
    const resultById = getProductById(products, 4);
    expect(resultById).toEqual(products[3]);
  });
  test('ID 6 возвращает products[5]', () => {
    const resultById = getProductById(products, 6);
    expect(resultById).toEqual(products[5]);
  });
  test('ID 0 возвращает null', () => {
    const resultById = getProductById(products, 0);
    expect(resultById).toEqual(null);
  });
  test('ID 999 возвращает null', () => {
    const resultById = getProductById(products, 999);
    expect(resultById).toEqual(null);
  });
  test('ID -1 возвращает null', () => {
    const resultById = getProductById(products, -1);
    expect(resultById).toEqual(null);
  });
  test("строковый ID '1' возвращает null", () => {
    const resultById = getProductById(products, '1');
    expect(resultById).toEqual(null);
  });
  test('ID undefined возвращает null', () => {
    const resultById = getProductById(products, undefined);
    expect(resultById).toEqual(null);
  });
  test('ID NaN возвращает null', () => {
    const resultById = getProductById(products, NaN);
    expect(resultById).toEqual(null);
  });
});

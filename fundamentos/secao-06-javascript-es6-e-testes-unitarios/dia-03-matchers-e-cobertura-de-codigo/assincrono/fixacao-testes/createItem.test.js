const createItem = require('./createItem');

describe('a função createItem', () => {
  it('cria um item válido', () => {
    expect(createItem('banana', 'kg', 1.99, 20)).toEqual({ name: 'banana', unit: 'kg', price: 1.99, quantity: 20 });
  });
  it('utiliza zero como quantidade padrão', () => {
    expect(createItem('banana', 'kg', 1.99));
  });
  it('Lança um erro quando não recebe parâmetros', () => {
    expect(createItem()).toThrow(Error);
  });
  it('Lança um erro se o nome do item não é uma string', () => {
    expect(createItem([], 'kg', 1.99, 20)).toThrow(Error);
  });
  it('Lança um erro se o preço é negativo', () => {
    expect(createItem('banana', 'kg', -1.99, 20)).toThrow(Error);
  });
  it('Lança um erro se o preço é zero', () => {
    expect(createItem('banana', 'kg', 0, 20)).toThrow(Error);
  });
});

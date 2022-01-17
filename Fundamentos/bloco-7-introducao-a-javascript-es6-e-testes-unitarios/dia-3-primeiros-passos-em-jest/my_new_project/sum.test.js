const sum = require('./sum.js');

describe ('sums two values', () => {
  it ('1-Deve retornar o resultado da soma', () => {
    expect(sum(2, 3)).toBe(5);
    expect(sum(4, 5)).toBe(9);
    expect(sum(0, 0)).toBe(0);

});
  it('deve disparar um erro caso receba como parâmetro uma string', () => {
    expect(() => sum(4,'5')).toThrowError();
    expect(() => sum(4,'5')).toThrowError('parameters must be numbers')
  })
});


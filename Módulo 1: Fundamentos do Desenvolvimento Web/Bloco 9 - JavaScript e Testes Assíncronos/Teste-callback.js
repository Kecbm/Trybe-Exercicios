const uppercase = (str, callback) => {
  setTimeout(() => {
    callback(str.toUpperCase());
  }, 500);
};

it('Avalia se a função uppercase retorna todas as letras maiúsculas', (done) => {
  uppercase('trybe', (str) => {
    try {
      expect(str).toBe('TRYBE');
      done();
    } catch (error) {
      done(error);
    }
  });
});
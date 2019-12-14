(() => {
  /**
    const soma = (a, b) => a + b;

    soma(2, 2);
    soma(2, 3);
    soma(2, 4);
    soma(2, 5);
     */

  const soma = a => b => a + b;
  const soma2 = soma(2);

  soma2(2);
  soma2(3);
  soma2(4);
  soma2(5);
})();

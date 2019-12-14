(() => {
  const exemplo = "Essa variável";

  const funcao1 = () => {
    console.log(`Será lembrada aqui: ${exemplo}`);

    return () => {
      console.log(`Aqui também: ${exemplo}`);

      return () => {
        console.log(`Acredito que já entendemos o que é Closure: ${exemplo}`);
      };
    };
  };

  funcao1()()();
})();

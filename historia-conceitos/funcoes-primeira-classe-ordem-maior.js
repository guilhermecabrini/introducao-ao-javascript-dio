(() => {
  const getName = () => {
    return "Guilherme Cabrini da Silva";
  };

  const log = value => {
    console.log(value);
  };

  const main = fn => {
    return () => log(fn());
  };

  const logName = main(getName);

  logName();
})();

(() => {
  const user = {
    name: "Guilherme",
    lastName: "Cabrini da Silva"
  };

  function getUserWithFullName(user) {
    return {
      ...user,
      fullName: `${user.name} ${user.lastName}`
    };
  }

  const userWithFullName = getUserWithFullName(user);
})();

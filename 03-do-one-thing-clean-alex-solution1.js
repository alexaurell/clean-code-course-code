function inputIsValid(email, password) {
  return (email && email.includes('@') && password && password.trim() !== '');
}

function logError() {
  console.log('Invalid input!');
}

function storeUser(email, password) {
  
    const user = {
    email: email,
    password: password,
  };

  database.insert(user);
}

function createUser(email, password) {
  
  if (inputIsValid(email, password) == false) {
    logError();
    return;
  }

  storeUser(email, password);

}

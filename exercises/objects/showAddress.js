function showAddress(address) {
  for (let key in address) console.log(key, address[key]);
}

const address = {
  street: 25,
  city: 'Lahore',
  zipCode: 54000,
};

showAddress(address);

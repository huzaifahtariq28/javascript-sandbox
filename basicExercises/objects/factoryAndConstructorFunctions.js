//Factory Function
function createAddress(street, city, zipCode) {
  return {
    street,
    city,
    zipCode,
  };
}

//Constructor Function
class Address {
  constructor(street, city, zipCode) {
    this.street = street;
    this.city = city;
    this.zipCode = zipCode;
  }
}

const address1 = createAddress(25, 'Lahore', 54000);
const address2 = new Address(25, 'Lahore', 54000);

console.log(address1);
console.log(address2);
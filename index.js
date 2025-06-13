const fruits = [{
  name: "Banana",
  price: 120,
}, {
  name: "Apple",
  price: 300,
}, {
  name: "Mango",
  price: 150,
}, {
  name: "Orange",
  price: 190,
}, {
  name: "Grapes",
  price: 200,
}]


// Get all fruits which are less than or equal to 200 and starts with 'g'
for (let index = 0; index < fruits.length; index++) {

  if (fruits[index].price <= 200 && fruits[index].name.toLowerCase().startsWith('g')) {
    console.log(fruits[index].name)
  }
}



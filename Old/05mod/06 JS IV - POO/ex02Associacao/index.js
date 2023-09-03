const Address = require("./address.js")
const Person = require("./person.js")

const addr = new Address("Av Pailista", 777, "Jardins", "São Paulo", "SP")
const alex = new Person("Alex Zanini", addr)

console.log(alex)
console.log(alex.address.fullAddress())
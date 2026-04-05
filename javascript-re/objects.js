// objects.js
// Objects in JavaScript

let person = {
  name: "Alice",
  age: 25,
  greet: function() {
    return "Hi, I'm " + this.name;
  }
};
// console.log(person.name); // Alice
// console.log(person.greet()); // Hi, I'm Alice
// Explanation: Object properties and methods accessed with dot notation.

// Adding a property
person.city = "Dhaka";
// console.log(person.city); // Dhaka
// Explanation: New property added to object.

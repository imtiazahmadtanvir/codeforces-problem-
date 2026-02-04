//Loops are handy, if you want to run the same code over and over again, each time with a different value.

// The for Loop
for(let i=10; i>0; i--) {
    console.log(i);
}

const cars = ["BMW", "Volvo", "Saab", "Ford"];
//car is variable which stores each value of array one by one.

let len = cars.length;

let text = "";
for (let i = 0; i < len; i++) {
  text += cars[i];
  text+= " ";
}
console.log(text +"-");
// Output: BMW Volvo Saab Ford


for (let car of cars) {
  console.log(car);
}
// Output: BMW Volvo Saab Ford


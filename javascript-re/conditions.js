
//js condition
// JavaScript Conditionals
// Conditional Statements allow us to perform different actions for different conditions.
let age =13;
if(age>=18){
    console.log("You are eligible for voting");
}else{
    console.log("You are not eligible for voting");
}


// The else if Statement
let time = 14;
if (time < 10) {
  greeting = "Good morning";
} else if (time < 20) {
  greeting = "Good day";
} else {
  greeting = "Good evening";
}
console.log(greeting);
// here greeting is variable which stores different values based on condition.
// Output: Good day

//js ternary contitional operator
let access = (age < 18) ? "No access granted" : "Access granted";
console.log(access);
// Output: No access granted

// The switch Statement
let day ;

switch (new Date().getDay()) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
     day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case 6:
    day = "Saturday";
}
console.log(day);

//javscript boolean

// if (day == "Monday")	true or false
// if (salary > 9000)	true or false
// if (age < 18)	true or false

if (day == "monday"){
    console.log(true);
}else{
    console.log(false);
}

//js logical operators
// Logical operators are used to determine the logic between variables or values.

// example:
let a = 5;
let b = 10;
let c = 15;
console.log(a < b && b < c); // true because both conditions are true
console.log(a > b || b < c);

// a) Template string
const username = "Sam";
const course = "JavaScript";
console.log(`Hello, ${username}, welcome to the course!`);


// b) Object shorthand & method shorthand
const name = "Sam";
const age = 21;

const student = {
  name,
  age,
  greet() {
    console.log("Hello");
  }
};

student.greet(); 
// c) Arrow function shorthand (implicit return)
const getFullName = (first, last) => `${first} ${last}`;

console.log(getFullName("John", "Doe")); // John Doe
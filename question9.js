
// 1. Template Literals + Expressions


// a)
console.log(`5 + 7 = ${5 + 7}`);

// b)
const multiLine = `
This is line 1
This is line 2
This is line 3
`;
console.log(multiLine);

// c)
const firstName = "John";
const lastName = "Doe";
console.log(`Full Name: ${firstName} ${lastName}`);



// 2. Arrow Functions & this


// a)
const square = (n) => n * n;
console.log(square(5));

// b)
const obj1 = {
  value: 50,
  test: () => console.log(this.value)
};
obj1.test(); 

// c) Rewrite so 'this' works
const obj2 = {
  value: 50,
  test: function () {
    console.log(this.value);
  }
};
obj2.test();



// 3. Rest, Spread & Copying Objects


// a)
const product = { name: "Pen", price: 10 };
const copy = { ...product };
console.log(copy);

// b)
const a = { x: 1 };
const b = { y: 2 };
const mergedAB = { ...a, ...b };
console.log(mergedAB);

// c)
const maxValue = (...nums) => Math.max(...nums);
console.log(maxValue(3, 8, 2, 10));



// 4. Destructuring & Optional Chaining

// a) Extract a and b
const arr = [10, 20, 30];
const [a1, b1] = arr;
console.log(a1, b1);

// b) Destructure brand
const laptop = { brand: "Dell", ram: "8GB" };
const { brand } = laptop;
console.log(brand);

// c) Optional chaining
const info = {};
console.log(info?.details?.email); // undefined safely



// 5. Scoping (let/var/const)


// a)
for (var i = 0; i < 3; i++) {}
console.log(i); // 3

// b)
for (let j = 0; j < 3; j++) {}
// console.log(j); // ReferenceError: j is not defined

// c)
const PI = 3.14;




// 6. Ternary Operator – Practice


// a)
let speed = kmph > 60 ? "Fast" : "Normal";

// b)
const adultStatus = (age) => (age >= 18 ? "Adult" : "Minor");

// c)
const numberCheck = (n) =>
  n > 0 ? "Positive" : n === 0 ? "Zero" : "Negative";



// 7. Spread, Rest & Arrays


// a)
const nums = [1, 2, 3];
const newNums = [...nums, 4, 5];
console.log(newNums);

// b)
const aArr = ["x", "y"];
const bArr = ["z"];
const combined = [...aArr, ...bArr];
console.log(combined);

// c)
const printNames = (...names) => names;
console.log(printNames("A", "B", "C"));



// 8. Object Destructuring & Shorthand


// a)
const user = { id: 101, status: "active" };
const { id, status } = user;
console.log(id, status);

// b) shorthand
const id2 = 101;
const role = "admin";
const user2 = { id2, role };
console.log(user2);

// c) object + method shorthand
const person = {
  name: "Sam",
  age: 22,
  greet() {
    console.log("Hello!");
  }
};
person.greet();


// 9. Template Literals (More Practice)


// a)
console.log(`Today's Date: ${new Date().toDateString()}`);

// b)
const NAME = "Alex";
const SCORE = 85;
console.log(`Hello ${NAME}, your score is ${SCORE}/100`);



// 10. Arrow Function Shorthands

// a)
const add = (a, b) => a + b;

// b)
const isAdult = (age) => age >= 18;

// c)
const double = (n) => n * 2;



// 11. Spread Operator (Arrays & Objects)


// a) Clone array
const arrClone = [...nums];

// b) Add 100 at beginning
const newArray = [100, ...nums];
console.log(newArray);

// c) Merge objects & override
const objA = { x: 1, z: 3 };
const objB = { y: 2, z: 99 };
const finalObj = { ...objA, ...objB };
console.log(finalObj);

// 12. Optional Chaining (More Practice)
// a)
const userOpt = {
  name: "Alex",
  address: {
    city: "Bangalore"
  }
};
console.log(userOpt?.address?.city);

// b)
console.log(userOpt?.job?.title); 

// c)
const data = {};
console.log(data?.profile?.email);
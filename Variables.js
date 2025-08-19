console.log("Variables");
var a=10;
var a;
console.log(a);

/*let b=20;
  let b;
  console.log(b);*/

/*const c=40;
  c=60;
  console.log(c);*/

console.log("String");
let greeting = "Hello!";
console.log(greeting);
console.log(typeof(greeting));

console.log("Number");
let num=42;
console.log(num);
console.log(typeof(num));

console.log("Boolean");
let isActive = true;
console.log(isActive);
console.log(typeof(isActive));

console.log("Null");
let emptyValue = null;
console.log(emptyValue);
console.log(typeof(emptyValue));

console.log("Undefined");
let notAssigened;
console.log(notAssigened);
console.log(typeof(notAssigened));

console.log("Object");
let person={firstName:'jone',
    lastName:'Doe'
}
console.log(person);
console.log(typeof(person));

console.log("Type Conversion");
console.log("Implicit");
let y="5";
let p=2;
console.log(typeof(y));
console.log(typeof(p));
console.log(y+p);
console.log(typeof(y+p));

let result = "The answer is "+42;
console.log(result);
console.log(typeof(result));

let isTrue = !!1;
console.log(isTrue);
console.log(typeof(isTrue));

console.log("Explicit");
let h=5;
let g=9;
console.log(String(h)+String(g))

let str = String(123);
console.log(str);

let bool = Boolean(0);
console.log(bool);



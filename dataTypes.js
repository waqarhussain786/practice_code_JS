// primitive type
// ===> 7 Types : string, number, boolean, null, undefined, Symbol, BigInt

const score = 100;

const scoreValue = 100.3;
const isLoggedIN = false;
const temp = null;

let userEmail;

const id = Symbol('123');
const anotherId = Symbol('123');

// console.log(id === anotherId);

const bigNumber = 56464513216546321n



// Reference type (Non-primitive type)
// ===> Array, Objects, Functions

// Array
const fruit = ['banana', 'apple'];
//obj
let info = {
    name: "waqar hussain ujjan",
    age: 30,
}
//func
const myFunction = function () {
    // console.log("hello world");
}

// console.log(typeof info);

// memory Types 
// Stack ===> primitive

let myName = "waqar hussain ujjan1";
let fullName = myName;

fullName = "Waqar hussain ujjan2"

// console.log(myName);
// console.log(fullName);

// Heap ===> Non-primitive OR Reference

let user1 = {
    email: "user1@gmail.com",
    id : 1
}

let user2 = user1;

user2.email = "waqar@gmail.com"

console.log(user1);
console.log(user2);

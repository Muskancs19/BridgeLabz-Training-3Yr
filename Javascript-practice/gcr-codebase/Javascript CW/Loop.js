// for (let i=1; i<=10; i++){
//     cosole.log("GLA University");
// }

// for (let i=5; i>=0; i--){
//     console.log(i);
// }

// let i = 1;
// while (i<=10){
//     console.log("GLA university");
//     i++;
// }

// let i = 5;
// while (i<=1){
//     console.log(i);
//     i--;
// }

// let i = 10;
// do {
//     console.log(i);
//     i--;
// }while (i>=1);

// const students = {
//     101 : "Ridhi",
//     102 : "Nimra",
//     103 : "Ankit",
//     104 : "Muskan"
// };

// console.log("Student7")

// Hoisting
// Function Hoisting
function MyName(finalName){
    console.log(finalName);
}
MyName("Akku");

// Function Expression
let MyName = function(finalName){
    console.log("Muskan");
}
MyName();

// Variable hoisting
console.log(age);
var age = 20;

// Class Hoisting
// Class Human {}
// const object1 = new Human();  

"use strict";
function sum(a,a){
    add = a + a;
    console.log(add);
}
sum(10 , 10);

function sum(a,a){qqqqqqqqqqqqqqq2
    add = a + 20;
    console.log(add);
}
sum(10 , 10);

// Syntax
let pattern = /^[0-9] {10} $ /\d\ (pattern.test("987654321"));
test(); //return true or false
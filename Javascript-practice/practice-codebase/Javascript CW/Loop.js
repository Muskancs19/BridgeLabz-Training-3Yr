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
// function MyName(finalName){
//     console.log(finalName);
// }
// MyName("Akku");

// Function Expression
// let MyName = function(finalName){
//     console.log("Muskan");
// }
// MyName();

// Variable hoisting
// console.log(age);
// var age = 20;

// Class Hoisting
// Class Human {}
// const object1 = new Human();  

// "use strict";
// function sum(a,a){
//     add = a + a;
//     console.log(add);
// }
// sum(10 , 10);

// function sum(a,a){
//     add = a + 20;
//     console.log(add);
// }
// sum(10 , 10);

// Syntax
// let pattern = /^[0-9] {10} $ /\d\ (pattern.test("987654321"));
// test(); //return true or false

// function sum(a,b){
//     return a + b;
// }
// console.log(sum(10,20));


// const sum = function(a,b){
//     return a+b;
// }

// console.log (sum (1,2));
// console.log (sum1 (1,2));
// function sum(a,b){
//     return a+b;
// }

// const sum1 = function(a,b) {
//     return a + b;
// }
// const sum2 = (a,b) => {
//     return a + b;
// }

// const login = false;


// setTimeout(()=>{
//     console.log("Hello World");
// },1000);

// (function(){
//     console.log("IIFE");
// })();

// function calculator(a,b,callback){
//     return callback(a,b);
// }
// calculator(1,2,sum); //Very imp callback function.

let name = "GLA University";
function outerFunction() {
    let name = "Muskan";
    function innerFunction() {
        console.log(name);
    }
    return innerFunction;
}
let inner = 

// Constructor  

function Car(name , model , year , color){
    this.make = name;
    this.model = model;
    this.year = year;
    this.color = color;
    this.drive =  function(){
        console.log(`You are driving a ${this.model}`);
    }
}
const car1 = new car("Ford","Mercedes",2024,"maroon");
const car2 = new car("Ford","Range Rover",2024,"maroon");
car1.drive();
car2.drive();
console.log(car1.name);
console.log(car1.model);
console.log(car1.year);
console.log(car1.color);
console.log(car2.name);
console.log(car2.model);
console.log(car2.year);
console.log(car2.color);

// Prototype : It is an object have a special property called prototype.
let a = {
    name2 : "Musku",
    language : "Javascript" , 
    run : () => {
        alert("Self- run");
    }
};
console.log(a);

let p = {
    run:() => {
        alert("run");
    }
};

p.__proto__ = {
    name : "Muskan" , 
};
a.__proto__ = p;
a.run();
console.log(a.name);


"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// any:-
let var1;
var1 = "hello";
// var1 = 3
// var1 = ["hello","world",33]
console.log(var1.toUpperCase());
// unknown:-
let var2;
var2 = "str";
// console.log(var2.toUpperCase()); // wrong way
if (typeof var2 === "string") { // right way using type guard
    console.log(var2.toLowerCase()); // type narrowing
}
var2 = 56;
if (typeof var2 === "number") {
    console.log(var2.toString());
}
// never:-
function fun1() {
    throw new Error("err");
}
// fun1(); // it make the below code unreachable
function fun2(num1, num2) {
    return num1 + num2;
}
console.log(fun2(3, 5));
console.log(fun1());

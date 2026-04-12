"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Generic
// Example 1
function getFirstElement(arr) {
    return arr[0];
}
const res1 = getFirstElement([2, 4, 6, 7, 78]);
const res2 = getFirstElement(["hello", "world", "s"]);
const res3 = getFirstElement([true, false]);
console.log(res1, res2, res3);
// Example 2
function getLength(item) {
    console.log(item.length);
}
getLength([324, 45, 6, 65, 3]);
getLength("helloworld");
// Example 3
function getKey(obj, key) {
    console.log(obj[key]);
}
getKey({ name: "raj", age: 24, address: "ahssasas" }, "age");

// Generic
// Example 1
function getFirstElement<T>(arr: T[]){ //instead of using any we will use <T> which is type parameter 
    return arr[0];
}
const res1 = getFirstElement<number>([2,4,6,7,78]);
const res2 = getFirstElement(["hello","world","s"]);
const res3 = getFirstElement([true, false]);
console.log(res1,res2,res3);

// Example 2
function getLength<T extends {length: number}>(item: T){
    console.log(item.length);
}
getLength([324,45,6,65,3]);
getLength("helloworld");

// Example 3
function getKey<T extends object, U extends keyof T>(obj: T, key: U){
    console.log(obj[key]);
}
getKey({name: "raj", age: 24,address: "ahssasas"}, "age");
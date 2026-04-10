// // type aliases
// type StringOrNumber = string | number; // type union

// let id: StringOrNumber = 34355;
// id = "hello"
// console.log(id);

// function combine(val1:StringOrNumber ,val2:StringOrNumber){
//     if(typeof val1 === "number" || typeof val2 === "number"){
//         return val1.toString() + val2.toString()
//     }
//     return val1 + val2;  
// }
// let result = combine(86,5)
// console.log(result);

// type hello = number; // primitive
// let num : hello = 3824;

// type StringOrNumber = string | number;
// type StringOrBoolean = string | boolean;

// type newtype = StringOrBoolean & StringOrNumber; // type intersection
// type newtype1 = StringOrNumber | StringOrBoolean;

// let num : newtype = "true"; // intersection takes only which is common in both 
// let num1 : newtype1 = true;

// type User = { // type object
//     name : string,
//     age : number,
//     email : string;
//     phone? : number, // ? is optional property
// }

// const user: User = {
//     name : "raj",
//     age : 31,
//     email : "user@gmail.com",
// }
// const user1: User = {
//     name : "kamal",
//     age : 25,
//     email : "user1@gmail.com",
//     phone : 2742472464,
// }

// type Student = User & { courseEnrolled : string}; // intersection in object
// const student = {
//     name : "kamal",
//     age : 25,
//     courseEnrolled : "cse",
// }  
// type unionType = {name: string} | { age : string}; // union in object
// const user2: unionType = {name : "kamal"}  

// // function expression of type
// type Sum = (num1 : number, num2 : number) => number;
// const sum : Sum = (num1 : number, num2 : number) => num1 + num2;
// sum(23,6);

// Interface
interface product { // interface object
    name : string,
    brand : string,
    price : number,
    rating? : number,
}
interface unionType extends product { // interface intersection using extends keyword and it can extend type also
    color : string
}

// interfaces can be merged or duplicated
interface Person {
    name : string,
}
interface Person {
    age : number,
}
// const person : Person = {name : "rohan", age : 31};
type person = {
    name : string;
};
// class implements interface
class User implements person {
    name! : string;
    age! : number;
} 
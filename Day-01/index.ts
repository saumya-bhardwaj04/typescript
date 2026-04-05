// datatypes:

// let num1:number = 5 // in ts datatype is defined as :datatype
// let num2:number = 8
// let sum:number = num1 + num2
// console.log(sum);

// let username: string = "alice";
// username = 42; // Error: Type 'number' is not assignable to type 'string'

// let num1 = 5 // ts infers 'number' type
// let num2 = "hello"
// let sum = num1 + num2 // sum automatic converted to string
// console.log(sum);

// function hello(name:string){
//     console.log("Hii", name);   
// }
// hello("sami")

// function combine(val1:string | number ,val2:string | number){ // | is union operator
//     if(typeof val1 === "number" || typeof val2 === "number"){
//         return val1.toString() + val2.toString() // converting number to string
//     }
//     return val1 + val2;  
// }
// let result = combine("hello",5)
// console.log(result);

function combine(val1:string | number | boolean ,val2:string | number | boolean){
    if(typeof val1 === "string" || typeof val2 === "string"){
        return val1.toString() + val2.toString() // converting number to string
    }
    if(typeof val1 === "boolean" || typeof val2 === "boolean"){
        return val1.toString() + val2.toString() // converting number to string
    }
    return val1 + val2;  
}
let result = combine(5,5)
console.log(result);

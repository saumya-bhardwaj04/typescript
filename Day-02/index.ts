//Array:-
// let arr = [1,2,3,4,"sshs",{},[],null,undefined]
// console.log(arr);

// let arrStr: string[] = ["hello", "world"]
// let arrStr2: Array<string> = ["hello", "world"]
// console.log(arrStr2);

// let arr:readonly(string | number)[] = [1,2,3,4,"sshs"] // The readonly keyword can prevent arrays from being changed.
// //@ts-ignore  // used to ignore errors
// arr.push("hello")

// let arr:any = [1,2,3,4,"sshs",{},[],null,undefined] //use any to ignore errors

// Tuple:- fixed length
// let tuple:[number,boolean,string] = [5,true,"hello"]
// tuple.push(20)
// console.log(tuple);

// let tuple:readonly[number,boolean,string] = [5,true,"hello"]
// tuple.push(20) // as it is readonly
// console.log(tuple);

// const graph: [x: number, y: number] = [55.2, 41.3]; // named tuple
// console.log(graph);
// const typlegraph: [number, number] = [55.2, 41.3];
// const [x,y] = typlegraph // destructuring tuple
// console.log(graph);

// Object:-
let user:{
    name : string,
    email : string,
    age? : number, // ? is optional properties which are properties that don't have to be defined in the object definition.
} = {
    name : "sami",
    email : "1@gmail.com", 
}
let users = [user, user, user]
console.log(users);
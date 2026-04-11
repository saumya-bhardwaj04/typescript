// // Abstract class
// abstract class Product{
//     constructor(public name:string, public brand:string, public price:number){}

//     // abstract method
//     abstract getDiscountedPrice(discount: number): void;

//     printDetails(){
//         console.log(`${this.name} costs $${this.price}`);
//     }
// }
// // new Product("samsung") // Cannot create an instance of an abstract class.

// class Mobile extends Product{
//     constructor(name:string, brand:string, price:number, public os:string){
//         super(name, brand, price);
//     }
//     getDiscountedPrice(discount: number){
//         const DiscountedPrice = this.price - this.price * (discount/100)
//         console.log(`after discount ${DiscountedPrice}`);
//     }
// }
// const phone = new Mobile("Samsung S12","samsung",300000,"android");
// console.log(phone);
// phone.printDetails();
// phone.getDiscountedPrice(10);

// // Interface
// interface User1 {
//     name: string;
//     age: number;
// }
// class User implements User1{
//     static count: number = 0; // static method
//     constructor(public name: string, public age: number){
//         User.count++; // static method can only be accessed using the class name
//     };
// }
// const U1 = new User("rohan", 34);
// // U1.count // class object cannot access the static method
// new User("raj", 23);
// new User("raj", 23);
// new User("raj", 23);
// console.log(User.count); // only class can access the static method

// // a class can extend only a single class
// class one{}
// class two{}
// class three extends one,two{} 

// a class can implement multiple interfaces
interface Camera{
    frontCam: number;
    backCam: number;
}
interface Bluetooth{
    version: number;
}
interface wifi{
    frequency: number;
}
class Phone implements Camera, Bluetooth, wifi{
    constructor(public frontCam: number, public backCam: number, public version: number, public frequency: number){}
}
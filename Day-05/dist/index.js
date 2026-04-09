"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Product {
    // class variables or properties
    name;
    price;
    brand;
    id; // readonly keyword can prevent class members from being changed and can be accessable from outside the class.
    // class construtor
    constructor(name, price, brand) {
        this.name = name; // this keyword in a class usually refers to the instance of the class.
        this.price = price;
        this.brand = brand;
        this.id = Math.floor(Math.random() * 99);
    }
    // class method
    getPrice() {
        console.log("price is ", this.price);
    }
    updateBrand(brand) {
        this.brand = brand; // only accessable to the class member not outside the class
    }
    // getter
    get getbrand() {
        return this.brand;
    }
    // setter
    set setprice(price) {
        this.price = price;
    }
}
// class object
const Product1 = new Product("iphone20", 500000, "Apple");
console.log(Product1);
Product1.getPrice();
// Product1.id = 44; // as its readonly
console.log(Product1.getbrand); // calling getter
Product1.setprice = 100000; // calling setter
console.log("updated price: ", Product1);
//inheritance
class Mobile extends Product {
    cameraSpecs;
    battery;
    constructor(name, price, brand, cameraSpecs, battery) {
        super(name, price, brand);
        this.cameraSpecs = cameraSpecs;
        this.battery = battery;
        this.price = 300000; // accessing protected variable of the product class
    }
    // class method overriding
    getPrice() {
        console.log("Mobile price is ", this.price);
    }
}
const Product2 = new Mobile("iphone20", 500000, "Apple", "120mp", "5000mAh");
console.log(Product2);
Product2.getPrice();
// shortcut
class user {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
console.log(new user("Jay", 20));

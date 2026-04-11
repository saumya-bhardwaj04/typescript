"use strict";
// // Abstract class
// abstract class Product{
//     constructor(public name:string, public brand:string, public price:number){}
Object.defineProperty(exports, "__esModule", { value: true });
class Phone {
    frontCam;
    backCam;
    version;
    frequency;
    constructor(frontCam, backCam, version, frequency) {
        this.frontCam = frontCam;
        this.backCam = backCam;
        this.version = version;
        this.frequency = frequency;
    }
}

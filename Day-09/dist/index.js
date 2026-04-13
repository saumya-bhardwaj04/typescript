"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ItemStorage {
    items = [];
    addItem(item) {
        this.items.push(item);
    }
    removeItem(item) {
        this.items = this.items.filter((i) => i !== item);
    }
    getAllItems() {
        console.log(this.items);
    }
}
const strStorage = new ItemStorage();
strStorage.addItem("pen");
strStorage.addItem("pencil");
strStorage.addItem("eraser");
strStorage.removeItem("eraser");
strStorage.getAllItems();
console.log(strStorage);
const numStorage = new ItemStorage();
numStorage.addItem(72624);
console.log(numStorage);
const userStorage = new ItemStorage();
userStorage.addItem({ name: "rohan", age: 24 });
console.log(userStorage);
const user = {
    name: "rohan",
    age: 27,
    email: "rohan@gmail.com",
    chats: { prev: "hello", new: "world" },
};
console.log(user);

// Generics in class
class ItemStorage<T>{
    private items: T[] = [];

    addItem(item: T){
        this.items.push(item);
    }

    removeItem(item: T){
        this.items = this.items.filter((i) => i !== item);
    }

    getAllItems(){
        console.log(this.items);
    }
}
const strStorage = new ItemStorage<string>();
strStorage.addItem("pen");
strStorage.addItem("pencil");
strStorage.addItem("eraser");
strStorage.removeItem("eraser");
strStorage.getAllItems();
console.log(strStorage);

const numStorage = new ItemStorage<number>();
numStorage.addItem(72624);
console.log(numStorage);

interface User{
    name: string,
    age: number,
}
const userStorage = new ItemStorage<User>()
userStorage.addItem({name: "rohan", age: 24});
console.log(userStorage);

// index property
interface User{
    name: string,
    age: number,
    [prop: string]: string | number | object,
}
const user: User ={
    name: "rohan",
    age: 27,
    email: "rohan@gmail.com",
    chats: { prev: "hello", new: "world"},
}
console.log(user);
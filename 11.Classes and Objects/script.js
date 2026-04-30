
// Base Class
class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    greet() {
        console.log("Hi, I am " + this.name);
    }
}



// Inheritance + super
class Student extends Person {
    constructor(name, age, marks) {
        super(name, age);
        this.marks = marks;
    }

    // Method
    result() {
        return this.marks >= 50 ? "Pass" : "Fail";
    }

    // Method Overriding
    greet() {
        console.log("Hello, I am student " + this.name);
    }
}



// Getter & Setter
class User{
    constructor(name){
        this._name = name;
    }

    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value;
    }
}

// Static Method
class MathUtil {
    static add(a, b) {
        return a + b;
    }
}

// Private Property
class Bank {
    #balance = 0;

    deposit(amount) {
        this.#balance += amount;
    }

    getBalance() {
        return this.#balance;
    }
}

// Prototype (old JS concept)
function Animal(name) {
    this.name = name;
}

Animal.prototype.speak = function () {
    console.log(this.name + " makes sound");
};

// Object + Destructuring + Spread
let obj1 = { a: 1 };
let obj2 = { b: 2 };

let merged = { ...obj1, ...obj2 };

let { a, b } = merged;

console.log("Merged:", merged);
console.log("Destructured:", a, b);

// Object Methods
console.log(Object.keys(merged));
console.log(Object.values(merged));

// USING EVERYTHING

// Person
let p = new Person("Hamza", 22);
p.greet();

// Student
let s = new Student("Ali", 20, 80);
s.greet();
console.log("Result:", s.result());

// Getter Setter
let u = new User("Ahmad");
console.log(u.name);
u.name = "Usman";
console.log(u.name);

// Static
console.log("Add:", MathUtil.add(5, 3));

// Private
let bank = new Bank();
bank.deposit(1000);
console.log("Balance:", bank.getBalance());

// Prototype
let dog = new Animal("Dog");
dog.speak();
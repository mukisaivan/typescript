"use strict";
// +++++++++++++++++++++++++++++++++++++++++++++ declaring variables ++++++++++++++++++++++++++++++++
let username = "ivan";
let myName = "ivan";
let anyVariable;
let a = 3;
let b = 13;
anyVariable = true;
let e;
let f;
e = "you are";
console.log(a * b);
console.log(username);
// +++++++++++++++++++++++++++++++++++++++++++++    functions ++++++++++++++++++++++++++++++++
function sum(c, d) {
    let answer = c + d;
    // console.log(answer);
    return answer;
}
sum(2, 3);
// +++++++++++++++++++++++++++++++++++++++++++++ arrays sets and tuples  ++++++++++++++++++++++++++++++++
let stringArr = ["w", "i", "n"];
stringArr.unshift("someone");
console.log(stringArr);
let arr = [];
arr.push();
let dev1 = {
    name: "ivan",
    active: true,
    albums: [],
};
function greetdeveloper(developer) {
    console.log("hello " + developer.name);
}
greetdeveloper(dev1);
///  +++++++++++++++++++++++++++++++++++++++++ Enums
var Grade;
(function (Grade) {
    Grade[Grade["A"] = 0] = "A";
    Grade[Grade["B"] = 1] = "B";
    Grade[Grade["C"] = 2] = "C";
    Grade[Grade["D"] = 3] = "D";
})(Grade || (Grade = {}));
let y = "hello";
let x = y; // example of assertion
let z = "main";
//+++++++++++++++++++++++++++++++++++++++++ classes
class Coder {
    // constructor(public readonly name: String, private age: number, protected location: string) {
    constructor(name, age, location) {
        this.name = name;
        this.age = age;
        this.location = location;
    }
}
let coder = new Coder("ivan", 23, "kajj");
class WebDev extends Coder {
    constructor(name, age, location, laptopbrand) {
        super(name, age, location);
        this.name = name;
        this.laptopbrand = laptopbrand;
        this.laptopbrand = laptopbrand;
    }
}
////////////////////////////////////////////////////////
class Keyboardist {
    play(actionn) {
        return `${this.name} ${actionn} ${this.instrument}`;
    }
    constructor(name, instrument) {
        this.name = name;
        this.instrument = instrument;
    }
}
///////////////////////////////////////////////////////////
const Page = new Keyboardist('mukisa', 'keyboard');
console.log(Page.play('hits'));
class Peeps {
    static getCount() {
        return Peeps.count;
    }
    constructor(name) {
        this.name = name;
        this.name = name;
        this.id = ++Peeps.count;
    }
}
Peeps.count = 0; //static means that we can only call count after referencing this class forexample Peeps.count
let John = new Peeps("John");
let Lenon = new Peeps("John");
let Bill = new Peeps("John");
console.log(John.id);
console.log(Peeps.count);
///////////////////////////////////////////////////////////
class Bands {
    constructor() {
        this.datastate = [];
    }
    get data() {
        return this.datastate;
    }
    set data(value) {
        if (Array.isArray(value) && value.every(el => typeof el === 'string')) {
            this.datastate = value;
            return;
        }
        else {
            throw new Error("some values in this array are not strings");
        }
    }
}
const MyBands = new Bands();
MyBands.data = ['goo', 'lee', 'goo']; // -------------->setter
console.log(MyBands.data); // --------------> getter
MyBands.data = [...MyBands.data, 'sisis'];
console.log(MyBands.data);
const todaysTransactions = {
    Pizza: 10,
    Books: 10,
    Job: 20
};
let prop = 'Pizza';
console.log(todaysTransactions[prop]);
function todaysNet(transactions) {
    let total = 0;
    for (const transaction in transactions) {
        total += transactions[transaction];
    }
    return total;
}
console.log(todaysNet(todaysTransactions));
//chaging the property of the object forexample 
todaysTransactions.Pizza = 20;
console.log(todaysTransactions);
const student1 = {
    name: 'ivan',
    gpa: 2,
    classes: [1, 2]
};
for (const key in student1) {
    console.log(`${key}: ${student1[key]}`);
}
Object.keys(student1).map((key) => {
    console.log(student1[key]);
});
/* means that all the streams ive mentioned above can be number or string
intead of
interface Incomes {
  [key: number | string] : number
}
*/
const monthlyIncomes = {
    salary: 500,
    bonus: 100,
    sidehustle: 250,
};
for (const key in monthlyIncomes) {
    console.log(monthlyIncomes[key]);
    // OR console.log(monthlyIncomes[key as keyof  Incomes]); 
}
//+++++++++++++++++++++++++++++++++++++++++ Generics ++++++++++++++++++++++++++++++++++++++++
const stringEcho = (abs) => abs;

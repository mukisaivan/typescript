"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// +++++++++++++++++++++++++++++++++++++++++++++ declaring variables ++++++++++++++++++++++++++++++++
console.log("DECLARING VARIABLES");
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
console.log("FUNCTIONS");
function sum(c, d) {
    let answer = c + d;
    // console.log(answer);
    return answer;
}
sum(2, 3);
// +++++++++++++++++++++++++++++++++++++++++++++ arrays sets and tuples  ++++++++++++++++++++++++++++++++
console.log("SETS ARRAYS AND TUPLES");
let stringArr = ["w", "i", "n"];
stringArr.unshift("someone");
console.log(stringArr);
let arr = [];
arr.push();
// +++++++++++++++++++++++++++++++++++++++++objects something like models ++++++++++++++++++++++++++++
console.log("OBJECTS.. STUFF LIKE MODELS");
let dev1 = {
    name: "ivan",
    active: true,
    albums: [],
};
function greetdeveloper(developer) {
    console.log("hello " + developer.name);
}
greetdeveloper(dev1);
///  +++++++++++++++++++++++++++++++++++++++++ Enums ++++++++++++++++++++++++++
console.log("ENUMS");
var Grade;
(function (Grade) {
    Grade[Grade["A"] = 0] = "A";
    Grade[Grade["B"] = 1] = "B";
    Grade[Grade["C"] = 2] = "C";
    Grade[Grade["D"] = 3] = "D";
})(Grade || (Grade = {}));
// +++++++++++++++++++++++++++++++++++++++++type assertions /type casting+++++++++++++
console.log("ASSERTIONS AND TYPE CASTING");
let y = "hello";
let x = y; // example of assertion
let z = "main";
//+++++++++++++++++++++++++++++++++++++++++ classes ++++++++++++++++++++++++++++++++++
console.log("CLASSES");
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
//+++++++++++++++++++++++++++++++++++++++++ implementing an interface to a class ++++++++++++++++++++
console.log("IMPLEMENTING INTERFACES TO CLASSES");
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
const Page = new Keyboardist("mukisa", "keyboard");
console.log(Page.play("hits"));
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
        if (Array.isArray(value) && value.every((el) => typeof el === "string")) {
            this.datastate = value;
            return;
        }
        else {
            throw new Error("some values in this array are not strings");
        }
    }
}
const MyBands = new Bands();
MyBands.data = ["goo", "lee", "goo"]; // -------------->setter
console.log(MyBands.data); // --------------> getter
MyBands.data = [...MyBands.data, "sisis"];
console.log(MyBands.data);
//+++++++++++++++++++++++++++++++++++++++++ index signatures and key of assertions +++++++++++++++++++++++++++++++
console.log("INDEX SIGNATURES AND KEY OF ASSERTIONS");
const todaysTransactions = {
    Pizza: 10,
    Books: 10,
    Job: 20,
};
let prop = "Pizza";
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
    name: "ivan",
    gpa: 2,
    classes: [1, 2],
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
console.log("GENERICS");
//forexmaple
const stringEcho = (abs) => abs;
const isObj = (arg) => {
    const nextans = Array.isArray(arg);
    console.log(nextans);
    return nextans;
};
// isObj({name: "ivan"})
const istrue = (arg) => {
    let answer = { arg, is: !!arg }; // !! shifts from what ever is given to either 0 or 1
    console.log(answer);
    return answer;
};
istrue(0 && 1);
const processUser = (user) => {
    return user;
};
console.log(processUser({ id: 1, name: "ivan" }));
//in the above the user object will only work if theres id because of the extends
//another example of generics
console.log("more advanced GENERIC EXAMPLE ");
const getUsersProperties = (users, key) => {
    return users.map((user) => user[key]);
};
const userArray = [
    {
        id: 2,
        phone: "0701476555",
        email: "ivanyan@gmail.com",
        location: "kibuye",
    },
];
console.log(getUsersProperties(userArray, "email")); // result: ['ivanyan@gmail.com']
//therethis function can be used to show the properties of an attribute that you want to access
console.log("more more advanced GENERIC EXAMPLE ");
class StateObj {
    constructor(value) {
        this.data = value;
    }
    get state() {
        return this.data;
    }
    set state(value) {
        if (value) {
            this.data = value;
        }
    }
}
const store = new StateObj("open");
store.state = "closed";
console.log(store.state);
//+++++++++++++++++++++++++++++++++++++++++ Utility types ++++++++++++++++++++++++++++++++++++++++
console.log("UTILITY TYPES ");
///////////////////////////////////////////// partial keyword
const updateAssignment = (assign, propsToUpdate // partial means we only use some of the assignment properties not all
) => {
    return Object.assign(Object.assign({}, assign), propsToUpdate);
};
const assign1 = {
    studentId: "12",
    title: "pcmstudent",
};
console.log(updateAssignment(assign1, { title: "3" })); // changing the title to 3
///////////////////////////////////////////// required keyword
const recordAssignment = (assign) => {
    return assign;
};
///////////////////////////////////////////// read only keyword
const assign2 = {
    studentId: "09876,54321",
    title: "math",
    grade: 95,
};
const assignverified = Object.assign(Object.assign({}, assign2), { verified: true });
console.log(assignverified);
/////////////////////////////////////////////  RECORD TYPE
const hexColorMap = {
    red: "FF0000",
    green: "00FF00",
    blue: "0000FF",
};
const finalStudentGrades = {
    Sara: "A",
    Micheal: "B",
    Drew: "C",
};
const finalStudentGrades2 = {
    Sara: { assign1: 45, assign2: 34 },
    Micheal: { assign1: 45, assign2: 34 },
    Drew: { assign1: 45, assign2: 34 },
};
const score = {
    studentId: "0987",
    grade: 34,
};
const preview = {
    title: "final porject",
    verified: false,
};
const createNewAssign = (title, points) => {
    return { title, points };
};
const tsAssign = createNewAssign("Utility types", 23);
console.log(tsAssign);
const assginArgs = ["Generics", 100];
const tsAssign2 = createNewAssign(...assginArgs);
console.log(tsAssign2);
const fetchUsers = () => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield fetch("https://jsonplaceholder.typicode.com/users")
        .then((res) => res.json())
        .catch((err) => {
        if (err instanceof Error)
            console.log(`Error: ${err.message}`);
    });
    console.log(data);
    return data;
});
fetchUsers();
// fetchUsers().then(data => console.log(data)); 

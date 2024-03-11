// +++++++++++++++++++++++++++++++++++++++++++++ declaring variables ++++++++++++++++++++++++++++++++

let username = "ivan";
let myName = "ivan";
let anyVariable: any;
let a: number = 3;
let b: number = 13;
anyVariable = true;
let e: string;
let f: string | number | boolean;
e = "you are";
console.log(a * b);
console.log(username);

// +++++++++++++++++++++++++++++++++++++++++++++    functions ++++++++++++++++++++++++++++++++

function sum(c: number, d: number): number {
  let answer = c + d;
  // console.log(answer);
  return answer;
}
sum(2, 3);

// +++++++++++++++++++++++++++++++++++++++++++++ arrays sets and tuples  ++++++++++++++++++++++++++++++++

let stringArr = ["w", "i", "n"];
stringArr.unshift("someone");
console.log(stringArr);
let arr: string[] = [];
arr.push();

// +++++++++++++++++++++++++++++++++++++++++objects something like models

interface Developer {
  name: string;
  active: boolean;
  albums: (string | number)[];
}

let dev1: Developer = {
  name: "ivan",
  active: true,
  albums: [],
};

function greetdeveloper(developer: Developer) {
  console.log("hello " + developer.name);
}
greetdeveloper(dev1);

///  +++++++++++++++++++++++++++++++++++++++++ Enums
enum Grade {
  A,
  B,
  C,
  D,
}

// +++++++++++++++++++++++++++++++++++++++++type assertions /type casting

type one = string;
type two = string | number;
type three = "hello";

let y: one = "hello";
let x = y as two; // example of assertion
let z = <three>"main";

//+++++++++++++++++++++++++++++++++++++++++ classes

class Coder {
  name: String;
  age: number;
  location: string;

  // constructor(public readonly name: String, private age: number, protected location: string) {

  constructor( name: String, age: number, location: string) {
    this.name = name;
    this.age = age;
    this.location = location;
  }
}


let coder = new Coder("ivan", 23, "kajj")


class WebDev extends Coder {
  
  constructor(public name:string, age: number, location:string, public laptopbrand:string ) {
    super(name, age, location)
    this.laptopbrand = laptopbrand
  }
}


//+++++++++++++++++++++++++++++++++++++++++ implementing an interface to a class

interface Musician {
  name: string
  instrument: string
  play(actionn: string) : string
}

////////////////////////////////////////////////////////

class Keyboardist implements Musician {
  name: string;
  instrument: string;
  play(actionn: string): string {
    return `${this.name} ${actionn} ${this.instrument}`
  }

  constructor(name:string, instrument:string, ) {
    this.name= name
    this.instrument = instrument
  }
}

///////////////////////////////////////////////////////////

const Page = new Keyboardist('mukisa', 'keyboard')
console.log(Page.play('hits'));


class Peeps {
  static count: number = 0;  //static means that we can only call count after referencing this class forexample Peeps.count
  static getCount(): number {
    return Peeps.count
  }
  public id: number 
  constructor(public name: string) {
    this.name = name
    this.id = ++Peeps.count
  }
}

let John = new Peeps("John")
let Lenon = new Peeps("John")
let Bill = new Peeps("John")

console.log(John.id);
console.log(Peeps.count);

///////////////////////////////////////////////////////////

class Bands {
  private datastate: string[]
  constructor() {
    this.datastate = []
  }

  public get data():string[] {
    return this.datastate
  }

  public set data(value:string[]) {
    if (Array.isArray(value) && value.every(el => typeof el === 'string')) {
      this.datastate = value
      return
    } else {
      throw new Error("some values in this array are not strings")
    }
  }
}

const MyBands = new Bands()
MyBands.data = ['goo', 'lee', 'goo'] // -------------->setter
console.log(MyBands.data);    // --------------> getter
MyBands.data = [...MyBands.data, 'sisis']
console.log(MyBands.data);



//+++++++++++++++++++++++++++++++++++++++++ index signatures and key of assertions

//these are used when you are creating an object but you dont know the exact name of the object

/*
interface TransactionObj {
  Pizza: number
  Books: number
  Job: number
}
*/

interface TransactionObj {
  [index: string] : number
}

const todaysTransactions: TransactionObj = {
  Pizza: 10,
  Books: 10,
  Job: 20
}

let prop: string = 'Pizza'
console.log(todaysTransactions[prop]);

function todaysNet(transactions: TransactionObj) {
  let total = 0
  for (const transaction in transactions) {
   total += transactions[transaction]
  }
  return total
}
console.log(todaysNet(todaysTransactions));

//chaging the property of the object forexample 
todaysTransactions.Pizza = 20
console.log(todaysTransactions);


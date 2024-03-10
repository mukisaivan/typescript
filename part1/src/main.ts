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
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
/// Enums
var Grade;
(function (Grade) {
    Grade[Grade["A"] = 0] = "A";
    Grade[Grade["B"] = 1] = "B";
    Grade[Grade["C"] = 2] = "C";
    Grade[Grade["D"] = 3] = "D";
})(Grade || (Grade = {}));

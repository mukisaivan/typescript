"use strict";
// +++++++++++++++++++++++++++++++++++++++++++++ declaring variables ++++++++++++++++++++++++++++++++
let username = 'ivan';
let myName = 'ivan';
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
    let answer = (c + d);
    // console.log(answer);
    return answer;
}
sum(2, 3);
// +++++++++++++++++++++++++++++++++++++++++++++ arrays sets and tuples  ++++++++++++++++++++++++++++++++
let stringArr = ["w", "i", "n"];
stringArr.unshift("someone");
console.log(stringArr);
function personprinter({ firstname, secondname }) {
    console.log(`${firstname} ${secondname}`);
    return `${firstname} ${secondname}`;
}
let person = {
    firstname: "ivan",
    secondname: "mukisa"
};
personprinter(person);

// +++++++++++++++++++++++++++++++++++++++++++++ declaring variables ++++++++++++++++++++++++++++++++



let username = 'ivan'
let myName = 'ivan'

let anyVariable: any;


let a: number = 3;
let b: number = 13;
anyVariable = true
let e: string;
let f: string | number | boolean;
e= "you are"



console.log(a * b);
console.log(username);


// +++++++++++++++++++++++++++++++++++++++++++++    functions ++++++++++++++++++++++++++++++++



 function sum(c:number, d:number): number {
  let answer = (c + d)
   // console.log(answer);
   return answer;
  
}

sum(2,3)

// +++++++++++++++++++++++++++++++++++++++++++++ arrays sets and tuples  ++++++++++++++++++++++++++++++++


let stringArr = ["w", "i", "n"]
stringArr.unshift("someone")

console.log(stringArr);


function personprinter({firstname, secondname}: {firstname:string, secondname: string}) {
  console.log(`${firstname} ${secondname}`)
  return `${firstname} ${secondname}`

}


let person = {
  firstname: "ivan",
  secondname: "mukisa"
}

personprinter(person)
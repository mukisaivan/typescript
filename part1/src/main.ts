// +++++++++++++++++++++++++++++++++++++++++++++ declaring variables ++++++++++++++++++++++++++++++++
console.log("DECLARING VARIABLES");

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
console.log("FUNCTIONS");

function sum(c: number, d: number): number {
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
let arr: string[] = [];
arr.push();

// +++++++++++++++++++++++++++++++++++++++++objects something like models ++++++++++++++++++++++++++++
console.log("OBJECTS.. STUFF LIKE MODELS");

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

///  +++++++++++++++++++++++++++++++++++++++++ Enums ++++++++++++++++++++++++++
console.log("ENUMS");

enum Grade {
  A,
  B,
  C,
  D,
}

// +++++++++++++++++++++++++++++++++++++++++type assertions /type casting+++++++++++++
console.log("ASSERTIONS AND TYPE CASTING");

type one = string;
type two = string | number;
type three = "hello";

let y: one = "hello";
let x = y as two; // example of assertion
let z = <three>"main";

//+++++++++++++++++++++++++++++++++++++++++ classes ++++++++++++++++++++++++++++++++++
console.log("CLASSES");

class Coder {
  name: String;
  age: number;
  location: string;

  // constructor(public readonly name: String, private age: number, protected location: string) {

  constructor(name: String, age: number, location: string) {
    this.name = name;
    this.age = age;
    this.location = location;
  }
}

let coder = new Coder("ivan", 23, "kajj");

class WebDev extends Coder {
  constructor(
    public name: string,
    age: number,
    location: string,
    public laptopbrand: string
  ) {
    super(name, age, location);
    this.laptopbrand = laptopbrand;
  }
}

//+++++++++++++++++++++++++++++++++++++++++ implementing an interface to a class ++++++++++++++++++++
console.log("IMPLEMENTING INTERFACES TO CLASSES");

interface Musician {
  name: string;
  instrument: string;
  play(actionn: string): string;
}

////////////////////////////////////////////////////////

class Keyboardist implements Musician {
  name: string;
  instrument: string;
  play(actionn: string): string {
    return `${this.name} ${actionn} ${this.instrument}`;
  }

  constructor(name: string, instrument: string) {
    this.name = name;
    this.instrument = instrument;
  }
}

///////////////////////////////////////////////////////////

const Page = new Keyboardist("mukisa", "keyboard");
console.log(Page.play("hits"));

class Peeps {
  static count: number = 0; //static means that we can only call count after referencing this class forexample Peeps.count
  static getCount(): number {
    return Peeps.count;
  }
  public id: number;
  constructor(public name: string) {
    this.name = name;
    this.id = ++Peeps.count;
  }
}

let John = new Peeps("John");
let Lenon = new Peeps("John");
let Bill = new Peeps("John");

console.log(John.id);
console.log(Peeps.count);

///////////////////////////////////////////////////////////

class Bands {
  private datastate: string[];
  constructor() {
    this.datastate = [];
  }

  public get data(): string[] {
    return this.datastate;
  }

  public set data(value: string[]) {
    if (Array.isArray(value) && value.every((el) => typeof el === "string")) {
      this.datastate = value;
      return;
    } else {
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

//these are used when you are creating an object but you dont know the exact name of the object

/*
interface TransactionObj {
  Pizza: number
  Books: number
  Job: number
}
*/

interface TransactionObj {
  [index: string]: number;
}

const todaysTransactions: TransactionObj = {
  Pizza: 10,
  Books: 10,
  Job: 20,
};

let prop: string = "Pizza";
console.log(todaysTransactions[prop]);

function todaysNet(transactions: TransactionObj) {
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

////////////////

interface Student {
  [key: string]: number | string | number[] | undefined;
  name: string;
  gpa: number;
  classes?: number[];
}

const student1: Student = {
  name: "ivan",
  gpa: 2,
  classes: [1, 2],
};

for (const key in student1) {
  console.log(`${key}: ${student1[key as keyof Student]}`);
}

Object.keys(student1).map((key) => {
  console.log(student1[key as keyof typeof student1]);
});

////////////////////////////////////////////////////////////////////////////

type Streams = "salary" | "bonus" | "sidehustle";
type Incomes = Record<Streams, number | string>;

/* means that all the streams ive mentioned above can be number or string 
intead of 
interface Incomes {
  [key: number | string] : number
}
*/

const monthlyIncomes: Incomes = {
  salary: 500,
  bonus: 100,
  sidehustle: 250,
};

for (const key in monthlyIncomes) {
  console.log(monthlyIncomes[key as keyof typeof monthlyIncomes]);
  // OR console.log(monthlyIncomes[key as keyof  Incomes]);
}

//+++++++++++++++++++++++++++++++++++++++++ Generics ++++++++++++++++++++++++++++++++++++++++
console.log("GENERICS");

//forexmaple
const stringEcho = <T>(abs: T): T => abs;

const isObj = <T>(arg: T): boolean => {
  const nextans = Array.isArray(arg);
  console.log(nextans);
  return nextans;
};
// isObj({name: "ivan"})

const istrue = <T>(arg: T): { arg: T; is: boolean } => {
  let answer = { arg, is: !!arg }; // !! shifts from what ever is given to either 0 or 1
  console.log(answer);
  return answer;
};
istrue(0 && 1);

//sung extends keyword
interface HasId {
  id: number;
}

const processUser = <T extends HasId>(user: T): T => {
  return user;
};

console.log(processUser({ id: 1, name: "ivan" }));
//in the above the user object will only work if theres id because of the extends

//another example of generics
console.log("more advanced GENERIC EXAMPLE ");

const getUsersProperties = <T extends HasId, K extends keyof T>(
  users: T[],
  key: K
): T[K][] => {
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

class StateObj<T> {
  private data: T;
  constructor(value: T) {
    this.data = value;
  }

  get state(): T {
    return this.data;
  }

  set state(value: T) {
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

interface Assignment {
  studentId: string;
  title: string;
  grade?: number;
  verified?: boolean;
}

///////////////////////////////////////////// partial keyword

const updateAssignment = (
  assign: Assignment,
  propsToUpdate: Partial<Assignment> // partial means we only use some of the assignment properties not all
) => {
  return { ...assign, ...propsToUpdate };
};

const assign1: Assignment = {
  studentId: "12",
  title: "pcmstudent",
};

console.log(updateAssignment(assign1, { title: "3" })); // changing the title to 3

///////////////////////////////////////////// required keyword

const recordAssignment = (assign: Required<Assignment>): Assignment => {
  return assign;
};
///////////////////////////////////////////// read only keyword

const assign2: Assignment = {
  studentId: "09876,54321",
  title: "math",
  grade: 95,
};
const assignverified: Readonly<Assignment> = { ...assign2, verified: true };
console.log(assignverified);

/////////////////////////////////////////////  RECORD TYPE

const hexColorMap: Record<string, string> = {
  red: "FF0000",
  green: "00FF00",
  blue: "0000FF",
};

type Students = "Sara" | "Micheal" | "Drew";
type LetterGrades = "A" | "B" | "C";

const finalStudentGrades: Record<Students, LetterGrades> = {
  Sara: "A",
  Micheal: "B",
  Drew: "C",
};

interface Grades {
  assign1: number;
  assign2: number;
}

const finalStudentGrades2: Record<Students, Grades> = {
  Sara: { assign1: 45, assign2: 34 },
  Micheal: { assign1: 45, assign2: 34 },
  Drew: { assign1: 45, assign2: 34 },
};

/////////////////////////////// Pick and Omit
// Pick
type AssignmentResult = Pick<Assignment, "studentId" | "grade">;
const score: AssignmentResult = {
  studentId: "0987",
  grade: 34,
};

//Omit
type Omitter = Omit<Assignment, "studentId" | "grade">;
const preview: Omitter = {
  title: "final porject",
  verified: false,
};

// Extract and Exclude
type adjustableGrade = Exclude<LetterGrades, "A">;
type highgradeGrade = Extract<LetterGrades, "A" | "B">;

//nonnullable
type AllPossibleGrades = "Dave" | "John" | null | undefined;
type NamesOnly = NonNullable<AllPossibleGrades>;

//return type  
type newAssign = { title: string; points: number };
const createNewAssign = (title: string, points: number): newAssign => {
  return { title, points };
};
type secondNewAssign = ReturnType<typeof createNewAssign>;

const tsAssign: secondNewAssign = createNewAssign("Utility types", 23);
console.log(tsAssign);

///////////////////Parameters

type AssignParams = Parameters<typeof createNewAssign>;
const assginArgs: AssignParams = ["Generics", 100];
const tsAssign2 = createNewAssign(...assginArgs);
console.log(tsAssign2);

/////////////////// Awaited utility

interface User {
  id: number,
  name: string,
  usernmae: string,
  email: string,
}

const fetchUsers = async (): Promise<User[]> => {
  const data = await fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .catch((err) => { 
      if (err instanceof Error) console.log(`Error: ${err.message}`);
    }); 
  console.log(data);
  return data
};
type FetchUsersReturnType = Awaited<ReturnType<typeof fetchUsers>>
fetchUsers()
// fetchUsers().then(data => console.log(data)); 

function createCalcFunction(n) {
  return function() {
    console.log(1000 * n);
  };
}

const calc = createCalcFunction(2);
calc();

//================

function createIncrementor(n) {
  return function(num) {
    return n + num;
  };
}

const addOne = createIncrementor(1);
const addTen = createIncrementor(10);

console.log("addOne(10)", addOne(10));
console.log("addOne(1)", addOne(1));

console.log("addTen(1)", addTen(1));
console.log("addTen(10)", addTen(10));

//==================

function urlGenerator(domain) {
  return function(url) {
    return `https://${url}.${domain}`;
  };
}

const comUrl = urlGenerator("com");
const ruUrl = urlGenerator("ru");

console.log(comUrl("google"));
console.log(ruUrl("google"));

//==========Свой bind

function bind(context, func) {
  return function (...args) {
    func.apply(context, args)
  }
}

const person1 = { name: "Elena", age: 22, job: "Frontend" };

function logPerson() {
  console.log(`Person: ${this.name}, ${this.age}, ${this.job}`);
}

bind(person1, logPerson)();



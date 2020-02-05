const person = {
  name: "Maxim",
  age: 25,
  greet: function() {
    console.log("Greet!!");
  }
};

const person2 = new Object({
  name: "Maxim",
  age: 25,
  greet: function() {
    console.log("Greet!!");
  }
});

Object.prototype.sayHello = function() {
  console.log("Hello");
};

const lena = Object.create(person);
lena.name = "Elena";


const str = 'I am string';

//объект, в котором можно посмотреть прототипы
const str2 = new String('I am string');
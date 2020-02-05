function hello() {
  console.log("Hello", this);
}

const person = {
  name: "Andrey",
  age: 23,
  sayHello: hello,
  sayHelloWindow: hello.bind(window),
  logInfo: function(job, phone) {
    console.group(`${this.name} info: `);
    console.log(`Name is ${this.name}`);
    console.log(`Age is ${this.age}`);
    console.log(`Job is ${job}`);
    console.log(`Phone is ${phone}`);
    console.groupEnd();
  }
};

const lena = {
  name: "Elena",
  age: 21
};

person.logInfo();

//bind возвращает функцию
person.logInfo.bind(lena, "Frontend", "123")();

//call  сразу вызывает функцию
person.logInfo.call(lena, "Frontend", "123");

//apply сразу вызывает функцию. Всегда передаем 2 параметра
person.logInfo.apply(lena, ["Frontend", "123"]);



//==============Комбинирование контекста и прототипов

const array = [1, 2, 3, 4, 5];

//Функция умножения всех элементов массива на число
function multBy(arr, n) {
  return arr.map(function(i) {
    return i * n;
  });
}

console.log('multBy(array, 5)', multBy(array, 5))

//Более удобное решение с прототипами:

Array.prototype.multBy = function (n) {
  return this.map(function(i) {
    return i * n;
  });
}


console.log('array.multBy(2);', array.multBy(2))

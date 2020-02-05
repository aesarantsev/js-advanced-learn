//value, enumerable, writable, configurable - property descriptors

const person = Object.create(
  {
    calculateAge() {
      console.log("Age: ", new Date().getFullYear() - this.birthYear);
    }
  },
  {
    name: {
      value: "Andrey",
      enumerable: true, // Видимость для циклов
      writable: true, // Возможность изменения поля
      configurable: true // Можем удалять ключи из объекта
    },
    birthYear: {
      value: 1996,
      enumerable: false,
      writable: false,
      configurable: false
    },
    age: {
      //Используется при получении значения
      get() {
        return new Date().getFullYear() - this.birthYear;
      },
      //Используется при записи значения
      set(value) {
        console.log("set age ", value);
      }
    }
  }
);

// person.name = "Maxim";

console.log(person);

for (let key in person) {
  if (person.hasOwnProperty(key)) {
    console.log("key: ", key, person[key]);
  }
}

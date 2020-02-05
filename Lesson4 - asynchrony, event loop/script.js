console.log("Start 1");

console.log("Start 2");

function timeout2sec() {
  console.log('timeout2sec')
}

window.setTimeout(function() {
  console.log("Inside timeout after 5 seconds");
}, 5000);


setTimeout(timeout2sec, 2000);

console.log("End 1");


//================= про setTimeout(function(){}, 0)

//1. Попадает в стек синхронно
console.log("Start 3");

//2. попадает в стек и регистрирует функцию
setTimeout(function() {
  //4. Выполняется функция
  console.log("Inside timeout");
}, 0);

//3.Попадает в стек сихнронно
console.log("End 2");
setTimeout() - функция не из JS, а из API браузера

Ассинхронность работает за счет EventLoop - цикл, который пробегается по всем строкам кода (функциям)

==============================
Демонстрация EventLoop
http://latentflip.com/loupe

console.log("Start");

console.log("Start 2");

setTimeout(function() {
  console.log("Inside timeout after 5 seconds");
}, 10000);

console.log("End");
============================

Спрашивают на собеседованиях:
setTimeout(function(){}, 0)

//1. Попадает в стек синхронно
console.log("Start");

//2. попадает в стек и регистрирует функцию
setTimeout(function() {
  //4. Выполняется функция
  console.log("Inside timeout");
}, 0);

//3.Попадает в стек сихнронно
console.log("End");
===========
console.log("Request data");

// setTimeout(() => {
//   console.log("Preparing data...");

//   const backendData = {
//     server: "aws",
//     port: 2000,
//     status: "working"
//   };

//   setTimeout(function() {
//     backendData.modified = true;
//     console.log("Data received", backendData);
//   }, 2000);
// }, 2000);

//=======================

//=======================

// const p = new Promise(function(resolve, reject) {
//   setTimeout(() => {
//     console.log("Preparing data...");
//     const backendData = {
//       server: "aws",
//       port: 2000,
//       status: "working"
//     };
//     resolve(backendData);
//   }, 2000);
// });

// p.then(data => {
//   return new Promise((resolve, reject) => {
//     setTimeout(function() {
//       data.modified = true;
//       // reject(data);
//       resolve(data); //Для вызова ошибки
//     }, 2000);
//   });
// })
//   .then(clientdata => {
//     console.log("Data received", clientdata);
//     clientdata.fromPromise = true;
//     return clientdata;
//   })
//   .then(data => {
//     console.log("Modified data", data);
//   })
//   .catch(err => {
//     console.error("Error: ", err);
//   })
//   .finally(() => {
//     console.log("finally");
//   });

//=======================

//=======================

const sleep = ms =>
  new Promise(resolve =>
    setTimeout(() => {
      resolve();
    }, ms)
  );

// sleep(2000).then(() => {
//   console.log("after 2 seconds");
// });

// sleep(3000).then(() => {
//   console.log("after 3 seconds");
// });

//Выполняется только тогда, когда все промисы в массивы завершатся
Promise.all([sleep(5000), sleep(5000)]).then(() => {
  console.log("All promises");
});

//Отрабатывает при срабатывании самого быстрого промиса
Promise.race([sleep(2000), sleep(5000)]).then(() => {
  console.log("Race promises");
});
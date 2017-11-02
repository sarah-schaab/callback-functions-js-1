// A Callback = a function passed into another function as a parameter

function sayHello() {
  console.log('Hello');
};

function executeCallback(callback) {
  callback();
};

executeCallback(sayHello);

// An Anonymous Function = a function without a name

executeCallback(function () {
  console.log('Hello');
});

executeCallback(function () {
  console.log('Goodbye');
});

// Arrow Function = shorthand syntax for an anonymous function.

executeCallback(() => console.log('Hello'));


// function showSomethingElse() {
//   console.log("What?");
// };

const randomTime = Math.random() * 5000;

setTimeout(() => console.log("What?") , randomTime);

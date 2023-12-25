/* Function is a set of codes which we writes to perform
 a perticular task and we can also recall it asper our requiremen*/
// Declaration of function
// function greet(){
//     console.log("Hello everyone");
// }
// const greeting= setInterval (greet,3000);
// console.log(greeting);
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// function expression
// when we want to assign a function to a variable.
//  const word= function(){
//     console.log("this is function expression");

//  }
// //  word();
// const add= function(x){
//     return x+x;

// }
// console.log(add(6));
// Function with a callback
// function greet(name, callback) {
//     console.log("Hello, " + name + "!");
  
//     // Simulate a task that takes some time (e.g., fetching data)
//     setTimeout(function () {
//       console.log("Task completed!");
//       // Execute the callback function
//       callback();
//     }, 2000); // Simulating a 2-second delay
//   }
  
//   // Callback function
//   function sayGoodbye() {
//     console.log("Goodbye!");
//   }
  
//   // Using the greet function with a callback
//   greet("Alice", sayGoodbye);
  function square(n){
    return n*n;
  }
  function cube(n){
    return n*n*n;
  }
  function sumofsomething (a,b, callbackfn){
    let square1 = callbackfn(a);
    let square2 = callbackfn(b);
    return square1+square2;

  }
 let ans= (2,3,square);
 console.log(ans);
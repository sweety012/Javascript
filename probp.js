//PROMISE IN JAVASCRIPT (BASICS AND THEN)

//basic Syntax for promise

/*

let promise = new Promise(function(resolve, reject) { The function passed to new Promise is called the executor. When new Promise is created, the executor runs automatically
    // executor (the producing code, "singer")
  });

 */

//Example
let promise = new Promise(function(resolve, reject) {
    // the function is executed automatically when the promise is constructed
  
    // after 1 second signal that the job is done with the result "done"
    setTimeout(() => resolve("done"), 1000);
  });

//Promise.then

promise.then(
    function(result) { /* handle a successful result */ },
    function(error) { /* handle an error */ }
  );


//Example of promise.then
let promise = new Promise(function(resolve, reject) {
    setTimeout(() => resolve("done!"), 1000);
  });
  
  // resolve runs the first function in .then
  promise.then(
    result => alert(result), // shows "done!" after 1 second
    error => alert(error) // doesn't run
  );

//promise.clean with example
//The call .catch(f) is a complete analog of .then(null, f), it’s just a shorthand.

let promise = new Promise((resolve, reject) => {
    setTimeout(() => reject(new Error("Whoops!")), 1000);
  });
  
  // .catch(f) is the same as promise.then(null, f)
  promise.catch(alert); // shows "Error: Whoops!" after 1 second
  




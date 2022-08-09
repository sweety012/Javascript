/*
Asynchronous programming is a technique that enables your program to start a potentially long-running task
and still be able to be responsive to other events while that task runs, 
rather than having to wait until that task has finished. Once that task has finished, 
your program is presented with the result.
*/

//Example of Asynchronous JavaScript Program
function myDisplayer(something) {
    document.getElementById("demo").innerHTML = something;
  }
  
  function myCalculator(num1, num2, myCallback) {
    let sum = num1 + num2;
    myCallback(sum);
  }
  
  myCalculator(5, 5, myDisplayer);

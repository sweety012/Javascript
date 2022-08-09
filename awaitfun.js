//Await and Async 
/*
Await : The await operator is used to wait for a Promise . It can only be used inside an async function within regular JavaScript code; however it can be used on its own with JavaScript modules.

Async :  It simply allows us to write promises based code as if it was synchronous and it checks that we are not breaking the execution thread

*/

//EXAMPLE for Async (basic)
async function myFunction() {
    return "Hello";
  }

//EXAMPLE if Error is there in Async
async function myFunction() {
    return "Hello";
  }
  myFunction().then(
    function(value) {myDisplayer(value);},
    function(error) {myDisplayer(error);}
  );

//////////////////////////////        AWAIT       ////////////////////////////

// Synatx of Await

let value = await promise;

//EXAMPLE How await works
async function myDisplay() {
    let myPromise = new Promise(function(resolve, reject) {
      resolve("How are you?");
    });
    document.getElementById("demo").innerHTML = await myPromise;
  }
  
  myDisplay(); 

//EXAMPLE Async/Await with Waiting for a Timeout
async function myDisplay() {
    let myPromise = new Promise(function(resolve) {
      setTimeout(function() {resolve("I love You !!");}, 3000);
    });
    document.getElementById("demo").innerHTML = await myPromise;
  }
  
  myDisplay();

//EXAMPLE Async/Await with Waiting for a file
async function getFile() {
    let myPromise = new Promise(function(resolve) {
      let req = new XMLHttpRequest();
      req.open('GET', "mycar.html");
      req.onload = function() {
        if (req.status == 200) {
          resolve(req.response);
        } else {
          resolve("File not Found");
        }
      };
      req.send();
    });
    document.getElementById("demo").innerHTML = await myPromise;
  }
  
  getFile();
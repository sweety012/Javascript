//HANDLING ==>> Syntax Errors and Runtime Error
/*
Example of syntax error 

window.print(;  <<  here ')' is missing hence there is a syntax error

Example of Runtime Error

windows.printme(); << here printme is not defined hence this is Runtime error 

*/

//To Handle This we use 'Try' and 'catch' and many more Method.

/* SYNTAX OF TRY AND CATCH 

  try {
         // Code to run
         [break;]
      } 
      
      catch ( e ) {
         // Code to run if an exception occurs
         [break;]
      }
      
      [ finally {
         // Code that is always executed regardless of 
         // an exception occurring
      }]


*/

//EXAMPLE 1 : try and catch with alert of statment or problem 
function myFunc() {
    var a = 100;
    try {
       alert("Value of variable a is : " + a );
    } 
    catch ( e ) {
       alert("Error: " + e.description );
    }
 }

 //EXAMPLE 2 :  try and catxh with finally statement 
 function myFunc() {
    var a = 100;
    
    try {
       alert("Value of variable a is : " + a );
    }
    catch ( e ) {
       alert("Error: " + e.description );
    }
    finally {
       alert("Finally block will always execute!" );
    }
 }

 //EXAMPLE 3 : THROW Statement to handle exception
 function myFunc() {
    var a = 100;
    var b = 0;
    
    try {
       if ( b == 0 ) {
          throw( "Divide by zero error." ); 
       } else {
          var c = a / b;
       }
    }
    catch ( e ) {
       alert("Error: " + e );
    }
 }

 //EXAMPLE 4 : onerror() Method for Exception Handling
 window.onerror = function () {
    alert("An error occurred.");
 }

 //EXAMPLE 5 :  Extract Information with Alert of Any Exceptiom
 window.onerror = function (msg, url, line) {
    alert("Message : " + msg );
    alert("url : " + url );
    alert("Line number : " + line );
 }
 
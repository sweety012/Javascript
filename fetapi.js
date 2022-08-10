//FETCH API 
/*
Fetching API in Javascript 

SYNTAX : 

fetch(file) : Here file is Recource file or URL
.then(x => x.text())
.then(y => myDisplay(y));

*/

//EXAMPLE 1: Fetching API
async function getText(file) {
    let myObject = await fetch(file);
    let myText = await myObject.text();
    myDisplay(myText);
  }

//EXAMPLE 2: Fetch based on async and await
async function getText(file) {
    let x = await fetch(file);
    let y = await x.text();
    myDisplay(y);
  }
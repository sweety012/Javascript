// for...in loop vs for...of loop //

/*
for...in loop : It returns a list of keys on the object being iterated.

for...of loop : returns a list of values of the numeric properties of the object being iterated.

*Both for..of and for..in statements iterate over lists*

*/

let list = [4, 5, 6];

for (let i in list) {
   console.log(i); // "0", "1", "2",
}

for (let i of list) {
   console.log(i); // "4", "5", "6"
}

//EXAMPLE 

let pets = new Set(["Cat", "Dog", "Hamster"]);
pets["species"] = "mammals";

for (let pet in pets) {
   console.log(pet); // "species"
}

for (let pet of pets) {
    console.log(pet); // "Cat", "Dog", "Hamster"
}
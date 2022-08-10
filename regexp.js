
//EXAMPLE Using RegExp() Constructor form
const regex = new RegExp(/^a...s$/);
console.log(regex.test('alias')); // true

//EXAMPLE of REGULAR EXPRESSION

const string = 'Find me';
const pattern = /me/;

// search if the pattern is in string variable
const result1 = string.search(pattern);
console.log(result1); // Output is 5

// replace the character with another character
const string1 = 'Find me';
string1.replace(pattern, 'found you'); // Output is Find found you

// splitting strings into array elements
const regex1 = /[\s,]+/;
const result2 = 'Hello world! '.split(regex1);
console.log(result2); // Output is ['Hello', 'world!', '']

// searching the phone number pattern
const regex2 = /(\d{3})\D(\d{3})-(\d{4})/g;
const result3 = regex2.exec('My phone number is: 555 123-4567.');
console.log(result3); // Output is ["555 123-4567", "555", "123", "4567"]

//REGULAR EXPRESSION MODIFIERS
const string = 'Hello hello hello';

// performing a replacement
const result1 = string.replace(/hello/, 'world');
console.log(result1); // Hello world hello

// performing global replacement
const result2 = string.replace(/hello/g, 'world');
console.log(result2); // Hello world world

// performing case-insensitive replacement
const result3 = string.replace(/hello/i, 'world');
console.log(result3); // world hello hello

// performing global case-insensitive replacement
const result4 = string.replace(/hello/gi, 'world');
console.log(result4); // world world world
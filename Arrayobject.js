
var marks = [34,23,24,93,73,25];

var fruits=['Orange','Apple','Pineapple'];

var mixed=['str',89,[3,5]];

var arr=new Array(23,123,21,'Orange');

console.log(arr);

console.log(mixed);

console.log(fruits[1]);
console.log(arr.length);
console.log(Array.isArray('abcds'));
arr[0] = 'swati';
console.log(arr);

var pos = marks.indexOf(93);
console.log(pos);

//mutating and Modifying arrays
marks.push(34); // add value to the end of array
marks.unshift(190); //add value to starting of array
marks.pop(); //remove element from end of array
marks.shift(); //remove element from starting of array
marks.splice(1,2);

console.log(marks);



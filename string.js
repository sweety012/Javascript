/* TYPES OF STRING METHOD IN JAVASCRIPT 

length: To Find lenght of String.
to LowerCase() : To Convert String in Lower case
toUpperCase() : To Convert string in Upper Case
includes() : To Search word or Character in String
startsWith() : To Search Starting Word in String
endsWith() : To Search for Last character or word in String
search() : Search for word or Character and return its location.
match() : It Match the array of Repeated word or Character of String
indexOf() : Return the first index of first word or character location of String
lastIndexOf() : Return the Last Index of Word or Character in String
replace() : To Replace Word or Cahracter in String
trim() : Remove Extra Spaces from Right or Left side for Character in String
charAt() : we have to define postion and it Return the word or character of that position
charCodeAt() : It Returns the ASCII Value of given Index
fromCharCode() : It return the Value of ASCII Value from Keyboard or String 
concat() : concat (merge) Multiple Strings
split() : It Break Every word of String and Make an Array of that Collection
repeat() : Print String With number of value given by user
slice() : pich word from random position (negative perameter can be pass)
substr() : similar as slice but print number of cahracter by second perameter
substring() : It Count Character from initial of String
toString() : Convert any Type of Value into String
valueOf() : Print String as it is.

*/

var str = "JavaScript is a Great Language";
var str2 = "     apple   ";
var str3 = "nice one";
var str4 = 50; 
var a = str.length;
var b = str.toUpperCase();
var c = str.toLowerCase();
var d = str.includes("a"); //return Boolean value
var e = str.startsWith("G"); //return boolean value
var f = str.endsWith("at");
var g = str.search("ang");
var h = str.match(/is/g);
var i = str.indexOf("is");
var j = str.lastIndexOf("is");
var k = str.replace("is"/g,"are"); // /g is used to search globaly
var l = str2.trim();
var m = str.charAt(3);
var n = str.charCodeAt(2); //returns 118 code of v
var o = String.fromCharCode(65); //return A
var p = str.concat(str2,str3);
var q = str.split(" "); //it track space and split String from space or given word or character by user
var r = str.repeat("4");
var s = str.slice(3,10); // first perameter is for initital and second perameter is for end
var t = str.substr(2,5);// first perameter is for initial and second perameter is for number of character from first perameter.
var u = str.substring(3,7); //It Count from the Initial of the String
var v = str4.toString();
var w = str.valueOf();


console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);
console.log(f);
console.log(g);
console.log(h);
console.log(i);
console.log(j);
console.log(k);
alert(l);
console.log(m);
console.log(n);
console.log(o);
console.log(p);
console.log(q);
console.log(r);
console.log(s);
console.log(t);
console.log(u);
console.log(v);
console.log(w);
//conversion of DataTypes

//Converting Number Into String DataType
var x = 34;
console.log(x,(typeof x));
//after conversion Number into String
var x = String(34);
console.log(x,(typeof x));

//Converting Boolean DataType into String
var bool = true;
console.log(bool, (typeof bool));
//After Conversion Into String
var bool = String(true);
console.log(booleanVar,(typeof booleanVar));

//Converting Date into String
var date = new Date();
console.log(date,(typeof date));
//After Conversion into String
var date=String(new Date());
console.log(date,(typeof date));

//Converting Array into String DataType
var arr = [1,2,3,4,5];
console.log(arr,arr.length,(typeof arr));
//after Conversion into String
var arr = String([1,2,3,4,5]);
console.log(arr,arr.length,(typeof arr));

// Another Way to DataType Conversion (TypeCasting)

var x = 45;
console.log(x.toString());

//Nmber Function
var str1 = "123";
console.log(str1,(typeof str1));

//Conversion String into number
var str1 = "123"; 
 console.log(str1,(typeof str1));

//Conversion String to Number with Alphabet
var str1 = "123abc"; //Throw NaN (Not a Number)
 console.log(str1,(typeof str1));

 //Conversion into number without Error
var str1 = Number("123abc"); 
var str1 = Number(true)
console.log(str1,(typeof str1));

// Conversion using Parse int and ParseFloat

var number1 = parseInt('34.2341');
var number2 = parseFloat('34.2341');
console.log(number1,(typeof number1),number2,(typeof number2));

console.log(number1.toFixed(20),(typeof number1));




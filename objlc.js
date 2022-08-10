//Normal Object 

let name = "Hello World";
let course = "Btech";

var obj = {
   name : name,
   course : course,
};
console.log(obj);

//Object Letral

let name = "Hello World!!!";
let course = "Btech";

var obj={
   name,
   course,
};
console.log(obj);


//use Variable name as a Property name Arithemetic operation can be performed
let n = "name";
var obj = {
    [n] : "hello world",
    course : "btech"
};
console.log(obj);
console.log(obj.name);

//Alternate way with function
let n = "student";
var obj = {
    [n + "name"] : "Yahoo Baba",  //it change name into Student Name #it works with only javascript V6
    course : "Btech",
    detail : function(){
        return `${this.studentname} is student of ${this.course}`
    }
};
   
console.log(obj);
console.log(obj.detail());

//New Function Syntax
//Older Way
let obj={
    name:"Yahoo Baba",
    show:function(){
      console.log(this.name);
    }
};

//V6 in JavaScript
let obj={
    name:"Yahoo Baba",
    show:function(){
      console.log(this.name);
    }
};


///////////////////COnstructors/////////////////////

//way to use function in new Version of JS
let n = "student";
var obj = {
    [n + "name"] : "Yahoo Baba",  //it change name into Student Name #it works with only javascript V6
    course : "Btech",
    detail(){
        return `${this.studentname} is student of ${this.course}`
    }
};

console.log(obj);
console.log(obj['detail']());

//return object using function
let name = "Yahoo Baba";
let course = "Btech";
function student(name, course){
return {name , course};
}
console.log(student(name, course));

//concatanation
let fname = "Yahoo";
let 1name = "Baba";
let course= "Btech";
function student(fname, 1name, course){
let fullname = fname + " " + lname;
return {fullname , course};
}
console.log(student(fname, 1name, course));
console.log(fullname);


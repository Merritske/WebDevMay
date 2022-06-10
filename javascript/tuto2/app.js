console.log("hello")

// var n1 = 5;
// var n2 = 10;
// var n3 = "5";
// var n4 = "10";

let result;

// result = (n1<n2) || (n3>n4);


// var isUserLoggedIn = true;
// result = !isUserLoggedIn;
// var isLightOn = false;
// //click on the light button
// //result = !isLightOn;
// isLightOn = !isLightOn;
// //clicker on the light button again
// result = isLightOn;

/*
DATATYPES:

string
number
boolean
undefined
null
object/array = allebei gezien als object

*/

//string data type
result = "hello friend";
result = 'hello buddy';
result = `hello camerad`;

//console.log(result, typeof result);

//number data type
result = 5;
//boolean data type
result = true;
//undefined data type: declared variable but not assigned a value to it
result = undefined;
//object data type
var student = {
    name: "John",
    age: 30,
    email: "john@john.com",
    isStudent: true,
    address: {  //object inside an object
        country: "Belgium",
        city: "Brussels",
        street: "Rue de la paix",
        zipcode: 1000
    }
};
//result = student.name
//result = `his name is ${student.name} and he is ${student.age} years old.`;
result = student.isStudent? `his name is ${student.name} and he is ${student.age} years old.`: "he is not a student";
result = `he lives in ${student.address.city}`
result = student.address

//array data type
var num = [1,"string",true,null,{name: "John"}];
result = num.length;
result = num[0];
result = num[num.length-1];
result = num[4].name;
num[1] = "new string" //replace the value of the array at index 1 with "new string"
result = num;

//nested arrays
var students = [
    {name: "John", 
scores:[55,82,69,14]},
    {name: "Jane",
    scores:[88,76,99,12]},
    {name: "Bob",
    scores:[77,88,99,11]}
]
result = students[0].scores[2];
var nestedArray = [1,2,3,4,[5,6,7,[8,9,10]]];
result= nestedArray[4][3][0];
console.log(result, `Type of result: ${typeof result}`);
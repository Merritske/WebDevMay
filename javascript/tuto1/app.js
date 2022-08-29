// var name = "John"
// const username = "root"
// let age = 35
// //   const age = 25 age is already declared => als veranderd moet worden:
// age = 25
// console.log(typeof (name))
// console.log("hello friends")
// console.log(username)
// console.log(age)

// let x = 10
// let y = 20
// let total = x + y
// console.log(total)

// document.getElementById("message").innerText = "Hello Friend :)"

// let way = document.getElementById("container").innerHTML = '<h1>Container!!</h1>'
// console.log(way)

// //BMI: weight/length x length
// let weight= 60
// let length = 1.70
// let BMI = weight /(length*length)
// console.log(BMI)


// //netto salaris brutto*tax/100
// let tax = 21/100
// let salary = 2300
// let netto = salary/tax
// console.log(netto)

var n1 = 5
var n2 = 5
var n3 = 6
var n4 = "5"

let result = n1 === n4
//om emojis picker te tonen: windowstoets en key van de punt samen indrukken
result = n1 < n3
result = n3 > n4


//ternary operator
let name = "Jos"
let age = 20
let money = 10
//age > 18 ? console.log(name + ",you are alowed to drink"): console.log(name + ", you are not allowed to drink, go home!")
result = age > 18 ? `${name} Is allowed to drink`  :  `${name} is not allowed to drink`


var rule1 = age>=18
var rule2 = money >=1
result = rule1 && rule2
console.log(result + " 😎")

//oefening:
//verander de tekst in de html afhankelijk van de variabelen

let container = document.getElementById("container")
let x = "Hello"
let y = "Goodbye"
let z = "friend"

let num = 9

num > 10 ? container.innerHTML = `${x} ${z}` : container.innerHTML = `${y} ${z}`

//EventListener  
let a=0;
let btn = document.getElementById('btn');
let btnR = document.getElementById('btn-r');    
let list = document.querySelector('.list');
btn.addEventListener('click', function(){
    console.log("ok")

  console.log(list)

  list.innerHTML +=`<li>${a+1}</li>`
a += 1
});
btnR.addEventListener('click', function(){
    console.log(list.lastChild)
list.lastChild.remove()
a -= 1
})

//alert("do you really want to leave?")

// var tc = confirm("Do you really want to leave this page?")
// if(tc){
//   alert("thanks for visiting")
// }else{
//   alert("Thanks for staying \n with us")
// }

// var tp = prompt("please enter your name")
// alert(tp)

//formvalidation
function validate(){
  var n1 = document.getElementById('num1');
  var n2 = document.getElementById('num2');
  if(n1.value != "" && n2.value != ""){
    if(n.value ==n1.value)
{
  return true
}  }
alert("Values should be equal and not blanc")
return false 
//the form will not be submitted if onsubmit event returns 'false'
}

//CONSTRUCTOR
class Point {
  constructor(a,b){
    this.x = a;
    this.y = b;
  }
  getX() {return this.x; }
  getY() { return this.y; }
}

class Rectangle {
  constructor(height, width){
    this.height = height;
    this.width = width;
  }
  get area(){
    return this.calcArea();
  }
  calcArea(){
    return this.height * this.width;
  }
}
const square = new Rectangle(5,5);
console.log(square.area); //25

//EXTENDS
//The extends keyword 
//is used in class declarations or class expressions 
//to create a child of a class. The child inherits the properties and methods of the parent.
class Animal {
  constructor(name){
    this.name = name;
  }
  speak(){
    console.log(this.name + ' makes a noise.');
  }
}
class Dog extends Animal {
  speak(){
    super.speak();
    console.log(this.name + ' barks.');
  }
}
let dog = new Dog('Rex');
dog.speak()

class Human{
  constructor(name){
    this.name = name;
  }
}
class Student extends Human {
  constructor(name, age){
      super(name);
  this.age = age;
  }
}

//NEW MAP => key,value pairs => cfr object
let map = new Map();
map.set('k1', 'v1').set('k2', 'v2');
console.log(map.get('k1')); //v1
console.log(map.has('k2')); //true
// Methods
// set(key, value) Adds a specified key/value pair to the map. If the specified key already exists, value corresponding to it is replaced with the specified value.
// get(key) Gets the value corresponding to a specified key in the map. If the specified key doesn't exist, undefined is returned.
// has(key) Returns true if a specified key exists in the map and false otherwise.
// delete(key) Deletes the key/value pair with a specified key from the map and returns true. Returns false if the element does not exist.
// clear() Removes all key/value pairs from map.
// keys() Returns an Iterator of keys in the map for each element.
// values() Returns an Iterator of values in the map for each element.
// entries() Returns an Iterator of array[key, value] in the map for each element.

//NEW SET => cfr array
let set = new Set();
set.add(5).add(9).add(59);
// Methods
// add(value) Adds a new element with the given value to the Set.
// delete(value) Deletes a specified value from the set.
// has(value) Returns true if a specified value exists in the set and false otherwise.
// clear() Clears the set.
// values() Returns an Iterator of values in the set.


//ASYNC FUNCTIONS => promise
function asyncFunc(work){
  return new Promise(function(resolve, reject){
    if (work ===""){
      reject(Error("nothing"));
    }
    setTimeout(function(){
      resolve(work);
    },1000)
  })
}
asyncFunc('work1') //task 1
.then(function(result){
  console.log(result);
  return asyncFunc('work2'); //task 2
}, function(error){
  console.log(error)
})
.then(function(result){
  console.log(result);
}, function(error){
  console.log(error)
});
console.log('End')
// It also prints "End", "Work 1" and "Work 2" 
// (the work is done asynchronously). 
// But, this is clearly more readable 
// than the previous example and in more complex situations 
// it is easier to work with.
//ANDER VB
function foo(){
  return new Promise((resolve, reject)=>{
    let result = getSomeResult();
    if(result){
      resolve('Success')
    }else{
      reject('Something went wrong')
    }
  })
}
//
const arr = ['0', '1', '4', 'a', '9', 'c', '16'];
const my_obj = {
  [Symbol.iterator]: function*() {
    for(let index of arr) {
      yield `${index}`;
    }
  }
};

// First, we create an object, and use the Symbol.iterator and generator function to fill it with some values.

// In the second line of the code, we use a * with the function keyword. It's called a generator function (or gen function).

// For example, here is a simple case of how gen functions can be useful:
const all = [...my_obj] /* Here you can replace the '[...my_obj]' with 'arr'. */
  .map(i => parseInt(i, 10))
  .map(Math.sqrt)
  .filter((i) => i < 5) /* try changing the value of 5 to 4 see what happens.*/
  .reduce((i, d) => i + d); /* comment this line while you are changing the value of the line above */

console.log(all);

//je kan modules maken en importeren
//voordeel, je kan die modules nog in andere projecten gebruiken
//in een js file: export let sum = (x,y)=> { x + y }
//in de file waar je het wil importeren
//import * as sum from './filename.js'


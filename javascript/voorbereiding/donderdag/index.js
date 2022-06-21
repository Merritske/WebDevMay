
//functies

//gewone functie
function func1(param1,param2,param3){
    console.log(param1,param2 ,param3)
}
//functie call
func1("hello","friend","😎")

//arrow function
const func2 = () => {
   var a = 5;
   return a
}
console.log(func2())


const func3=(a,b)=>{
    return  a + b
}
console.log(func3(5, 3));

function sumOfNumbers(){
    console.log("before return keyword")
    return 5+5
    console.log("after return keyword")//wordt niet getoond
}
console.log(sumOfNumbers())

let num1 = 15;
let num2 = 20;
num1 = 5;
num2 = 10;
function sumOfNum(num1, num2){
    return num1 + num2
}
console.log(sumOfNum(num1, num2))




function sayHello1(username){
    return "Hello " + username
}
console.log(sayHello1("John"))

const sayHello2 = (username) => {
    return `Hello ${username}`
}
console.log(sayHello2("Marc"))

const sayHello3= ()=>{
    arr2.map((user)=>{
        console.log(user)
    })
}
sayHello3()
let friends = ["Linda", "Els", "Petra"]
console.log(friends)
function addFriend(name){
    return friends.push(name)
 }
 addFriend("Evi")
    console.log(friends)

//oefening: maak een functie waarbij aan 
// de students een nieuwe student toegevoegd wordt
// naam, leeftijd, woonplaats
let students = [
    {naam:"Jan", leeftijd: 25, woonplaats: "Antwerpen"},
    {naam:"Laura", leeftijd: 20, woonplaats: "Gent"},
    {naam:"Piet", leeftijd: 31, woonplaats: "Hasselt"}
]
function studentList(student){
students = [...students,student ]
}
studentList({naam:"Marie", leeftijd: 27, woonplaats: "Mechelen"})
console.log(students)



//oefening: Als het later is dan 11u => "Goedemiddag" als het eerder is dan 11u => "Goedemorgen"
let time = new Date().getHours()
let greeting = time > 11 ? time >= 16? "Goedeavond":"Goedemiddag" : "Goedemorgen"
console.log(greeting)
//of zet het in HTML


//oefening:
//verander de tekst in de html afhankelijk van de variabelen

// let container = document.getElementById("container")
// let x = "Hello"
// let y = "Goodbye"
// let z = "friend"

// let num = 12

// num > 10 ? container.innerHTML = `${x} ${z}` : container.innerHTML = `${y} ${z}`


//CLICK EVENTS
//NOG OEFENINGEN
//praktische toepassing

let nummer1 = document.querySelector("#num1");
console.log(nummer1)
let nummer2 = document.querySelector("#num2");
let result = document.querySelector("#result")
function bereken(){
    console.log(Number(nummer1.value));
    console.log(Number(nummer2.value));
    return result.innerHTML = `het resultaat is:${Number(nummer1.value)+ Number(nummer2.value)}` 
};
bereken();
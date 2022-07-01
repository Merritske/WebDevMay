//datum => new Date()
//getHours(), getMonth(), getDate(), getDay()
//oefening: hoe laat is het nu?
let uur = new Date().getHours()
console.log(uur)
//oefening: Als het later is dan 11u => "Goedemiddag" als het eerder is dan 11u => "Goedemorgen"
let time = new Date().getHours()
let greeting = time > 11 ? time >= 16? "Goedeavond":"Goedemiddag" : "Goedemorgen"
console.log(greeting)
//zet het in HTML
document.getElementById("intro").innerHTML = greeting

//to Local String
let result1;
let date = new Date();
let options = {weekday:'short', year:'numeric',month:'long',day:'numeric'}
result1 = date.toLocaleString('nl-BE',options);
//month : numeric or long - weekday: short or numeric
document.getElementById('time').innerHTML = result1
//oefening: realtime
// setInterval(function(){
//    // console.log('hello world')
// }, 1000) //toont elke seconde 'hello world'
// function getRealTime(){
//     var dateObj = new Date();
//     let getTime = `the current time is: ${dateObj.getHours()}:${dateObj.getMinutes()}:${dateObj.getSeconds()}`
//   document.getElementById('time').innerHTML = getTime
//     console.log(getTime)
// }
// setInterval(function(){
//     getRealTime()
// },1000)

//MATH OBJECTS
let result2;
result2 = Math.random() //geeft een random getal tussen 0 en 1 (1not incuded)
result2 = (Math.random()* 10)+1 //geeft getal van 1 tot 10 met komma's => startnummer = +1
result2 = (Math.round(Math.random()*10)) //integer getallen van 0 tot 9
result2 = Math.round(Math.random()*100)+1 //integer tussen 1-100
result2 = Math.round(Math.random()*10)+5 // van 5 tot 15
console.log(result2)



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
    console.log("before return keyword");
    return 5+5;
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

let arr2 = ["Lies", "Jan", "Jos"];
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


//oefening:
//verander de tekst in de html afhankelijk van de variabelen
//maak een lijst in HTML waar al de geslaagde studenten in staan
//en een lijst waar de studenten in staan die niet geslaagd zijn
var student =[{
    id:1,
    naam:"Joe",
    course: 'Java',
    score : 45,
},
{
    id:2,
  naam:"Jos",
    course: 'Java',
    score: 55,
},
{
    id:3,
   naam:"Jack",
    course: 'HTML',
    score:70,
},
{
    id:4,
 naam:"Fien",
    course: 'HTML',
    score: 85,
},
{
    id:5,
   naam:"Piet",
    course: 'Java',
    score: 35,
},
{
    id:6,
  naam:"Lies",
    course: 'Java',
    score: 55,
}
]
let result4;
//filter functie geeft een nieuwe array met de elementen die aan bepaalde voorwaarden voldoen
// result4 = student.filter(function(x){ 
//     return x.course ==="Jalsa"
// })//als de cursus niet bestaat
// result4 != 0 ? console.log(result4):console.log("Not found")

function findWhoPassedExam(param){ //dynamic om te kunnen gebruiken voor andere arrays
    //filter data
    let result4 = param.filter(function(value){
       return value.score >=50 //return if student has score >=50
    })
 return result4 //new array list is created here 
}
result4 = findWhoPassedExam(student)
  console.log(result4)
  //tabel maken met naam en score
let tabel = document.getElementById("geslaagd")

result4.map((data)=>{
    tabel.innerHTML += `<tbody>
    <tr>
    <td>${data.naam}</td>
    <td>${data.score}</td>
    </tr>
    </tbody>
    `
})



  
//CLICK EVENTS
//3 mogelijkheden:
//in HTML: input naam en passwoord =>input form
//in HTML click-event en functie in js =>berekening som
//in js met addEventlistener

//inputform resetten
let formI =document.querySelector(".formI")
let nameInput = document.getElementById('nameInput')
let btn = document.getElementById("btn")
let val = false;
btn.addEventListener('click', (e)=>{
    val = !val
    if(!val){
     formI.innerHTML = ` <form>
   <input type="text" placeholder="naam" id="nameInput">
</form>`
 btn.innerHTML = "SUBMIT"
 }else{
    formI.innerHTML = `<h2>Welkom ${nameInput.value}</h2>`
    btn.innerHTML = "RESET"
 } 
})

//al de elementen dan de array optellen => eval()
let arr = ["1","2","3","4","5"]
console.log(arr)
let arr1 = arr.join("+")
arr1 = eval(arr1)
 
 console.log(arr1);console.log(typeof(arr1))


//berekening som

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

//met addEventListener
//eerste de elementen in HTML in js targetten
let btnPlus = document.getElementById("verhoog")
let btnMin = document.getElementById("verlaag")
let btnReset = document.getElementById("reset")
let counter = document.getElementById("counter")
let count=0;
btnPlus.addEventListener('click', ()=>{
    count ++
 counter.innerHTML = count
})
btnMin.addEventListener('click', ()=>{
    count --
 counter.innerHTML = count
})
btnReset.addEventListener('click', ()=>{
   count = 0
 counter.innerHTML = count
})

//events : click, onmouseover, onmouseleave,....w3schools/events

//oefening: spelletje: BLAD STEEN SCHAAR
//computer random laten kiezen tussen blad, steen of schaar
//speler een keuze laten maken
//keuzes vergelijken
//win or loose opties: blad wint tegen steen, steen wint tegen schaar,....


//NOG OEFENINGEN:

//TODO-list: met remove icon om een rij van een tabel te verwijderen
//of andere lijst met een remove of delete button


//iets laten bewegen door op een knop te drukken

//style laten veranderen als je erover gaat met je muis
console.log("hello")

//object => key: value
let person = {
    name:"Jan",
    age: 25,
    woonplaats: "Antwerpen"
};
console.log(person.name);
console.log(person.age);
//backtics
console.log(`deze persoon heet ${person.name}, is ${person.age} jaar oud en woont in ${person.woonplaats}`)

//object in een object
var student = {
    naam: "John",
    leeftijd: 30,
    email: "john@john.com",
    adres: { 
        land: "Belgium",
        stad: "Brussels",
        straat: "Rue de la paix",
        postcode: 1000
    }
};
console.log(student)
//key toevoegen: isStudent
student = {...student, isStudent: true}
console.log(student)
console.log(student.adres.straat)
console.log(student["adres"]["stad"])

//for in loop
for(let i in student){
    console.log(i)//geeft keys van object
    console.log(student[i])//geeft values van object)
}

//oefening: zet de naam, leeftijd en stad in html in een tabel
document.querySelector(".container>table>tbody").innerHTML = `<tr><td>${student.naam}</td> 
<td>${student.leeftijd}</td> 
<td>${student.adres.stad}</td>
</tr>`


//array
let arr1 = [1,2,3,4,5];
arr1 += 3;
console.log(arr1[0]);
let arr2 = ["Lies", "Jan", "Jos"];
console.log(arr2)
arr2[1] = "Janne"; //vervangen van een element in de array
console.log(arr2);
//spread operator
arr2 = [...arr2,"Piet" ] ; //voegt een element toe aan de array
console.log(arr2)
arr2.push("Marc");  //voegt een element toe aan de array
console.log(arr2);

//objects in arrays
let students = [
    {naam:"Jan", leeftijd: 25, woonplaats: "Antwerpen"},
    {naam:"Jos", leeftijd: 20, woonplaats: "Gent"},
    {naam:"Klaas", leeftijd: 31, woonplaats: "Hasselt"}
]
console.log(students.length)
console.log(students[0].naam)
//for loop
//id toevoegen
for(let i = 0; i < students.length; i++){
console.log(students[i].naam + ":" + students[i].leeftijd)
students[i].id = i
}
console.log(students)
let studenten = [
    {
        naam: "John",
        leeftijd: 30,
        email: "john@john.com",
        isStudent: true,
        adres: {  //object in een object
            land: "Belgium",
            stad: "Brussels",
            straat: "Rue de la paix",
            postcode: 1000
        }
    },
    {
        naam: "Jane",
        leeftijd: 25,
        email: "jane@joemal.com",
        isStudent: true,
        adres: {  //object in een object
            land: "Belgium",
            stad: "Gent",
            straat: "Vredesplein",
            postcode: 9000
        }
    },
    {
        naam: "Jeroen",
        leeftijd: 28,
        email: "jj@yahoo.com",
        isStudent: true,
        adres: {  //object in een object
            land: "Belgium",
            stad: "Antwerpen",
            straat: "Antwerpsestraat",
            postcode: 2000
        }
    }
]
console.log(studenten[1].adres.straat)
studenten[0].isStudent = false;

console.log(studenten) 
console.log(studenten.length)
console.log(studenten.naam) //geeft undefined
//methoden om de verschillende studenten te tonen zonder index nummers
//map method
studenten.map((stud)=>{
    console.log(stud.naam)
}   )

//meerdere studenten in de tabel zetten
//map functie
studenten.map((studentI)=>{
    document.querySelector(".container>table>tbody").innerHTML += 
        `<tr>
    <td>${studentI.naam}</td> 
    <td>${studentI.leeftijd}</td> 
    <td>${studentI.adres.stad}</td>
    </tr>`})

//OEFENING
//id invoegen bij elke student
 let id = 1;
studenten.map((studentID)=>{
    console.log(studentID)
   studentID.id = id ++;
})

//andere loop methodes zie op w3schools

console.log(studenten)



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
//praktische toepassing
var number1 = document.getElementById("num1")
var number2 = document.getElementById("num2")
var getButton = document.getElementById("btn")
var result = document.getElementById("result")
//console.log(result) alles testen dat het juist getarget is
//define function
function doCalc(){
 
    //console.log("Hello test")
    var sumResult = Number(number1.value) + Number(number2.value) //value is default 0 moet niet perse in HTML bij in input gezet worden
   // console.log(sumResult)
    result.innerHTML = `Result is ${sumResult}` //"result" is de target in html dat moet aangepast worden
}
// let nummer1 = document.querySelector("#num1").value;
// console.log(nummer1)
// let nummer2 = document.querySelector("#num2").value;
// function bereken(nummer1, nummer2){
//     return nummer1 + nummer2
// }
// console.log(bereken())

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

function studentList(){

}


//oefening: Als het later is dan 11u => "Goedemiddag" als het eerder is dan 11u => "Goedemorgen"
let time = new Date().getHours()
let greeting = time > 11 ? time >= 16? "Goedeavond":"Goedemiddag" : "Goedemorgen"
console.log(greeting)

//oefening:
//verander de tekst in de html afhankelijk van de variabelen

// let container = document.getElementById("container")
// let x = "Hello"
// let y = "Goodbye"
// let z = "friend"

// let num = 12

// num > 10 ? container.innerHTML = `${x} ${z}` : container.innerHTML = `${y} ${z}`


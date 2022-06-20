console.log("hello")

//object
let person = {
    name:"Jan",
    age: 25,
    woonplaats: "Antwerpen"
};
console.log(person.name);
console.log(person.age);
//backtics
console.log(`deze persoon heet ${person.name}, is ${person.age} jaar oud en woont in ${person.woonplaats}`)
var student = {
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
};
console.log(student.adres.straat)

//array
let students = [
    {name:"Jan", age: 25, woonplaats: "Antwerpen"},
    {name:"Jos", age: 20, woonplaats: "Gent"},
    {name:"Klaas", age: 31, woonplaats: "Hasselt"}
]
console.log(students.length)
for(let i = 0; i < students.length; i++){
console.log(students[i].name + ":" + students[i].age)

}

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
let z
const func3=(a,b)=>{
    return z= a + b
}
func3(5, 3)
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


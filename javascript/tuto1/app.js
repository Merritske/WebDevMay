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

let num = 12

num > 10 ? container.innerHTML = `${x} ${z}` : container.innerHTML = `${y} ${z}`
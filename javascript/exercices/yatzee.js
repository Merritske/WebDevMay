//5 teerlingen
//als er dubbels inzitten, eruit halen en de ogen optellen
//na 3 keer gooien alles optellen
//als 5 dezelfde 100punten
let displDices = document.querySelector(".dices")
let btn = document.querySelector('#throwDice')
let reloadBtn = document.querySelector('#reload')
let displScore = document.querySelector('#score')
let differ = document.querySelector('#differ')
let dices = []

// function throwFirstDices() {
//   for (let x = 0; x < 5; x++) {
//     let dice = Math.ceil(Math.random() * 6)
//     dices.push(dice)
//   }
// }
//throwFirstDices() //ok
//displDices.innerHTML = dices
// let score = 0
// let delDice = []
// let difference
// function doubleDices() {
//   dices.map((dice, index) => {
//     for (let y = 0; y < dices.length; y++) {
//       if (dice == dices[y] && index != dices.indexOf(dices[y])) {
//         delDice.push(dice)
//         //console.log(dices)
//         console.log(delDice)

//         difference = dices.filter(x => !delDice.includes(x))

//       }
//     }


//   })
// delDice.map(x=> score += x)

// }


// doubleDices() //double in array ok, double uit oorspronkelijke array = difference,  optellen doubles ok
// console.log(dices)
// console.log(difference)
// console.log(delDice)
// console.log(score)

//werkt voor 1 keer met de teerling te werpen.
//onclick functie en button toevoegen en aantal pogingen (3)
let aantalDices = 5
let throws = 3
//als aantal dices = 0 nog oplossen


 btn.addEventListener('click',
  yatzee)  

 
  
let score = 0
let delDice = []
let difference

//   function doubleDices() { 
//     delDice.map(x=> score += x)
//     aantalDices -= delDice.length
// for (let x = 0; x < aantalDices; x++) {
//     let dice = Math.ceil(Math.random() * 6)
//     dices.push(dice)
//   }
//   displDices.innerHTML = dices
//     dices.map((dice, index) => {
//       for (let y = 0; y < dices.length; y++) {
//         if (dice == dices[y] && index != dices.indexOf(dices[y])) {
//           delDice.push(dice)
//           //console.log(dices)
//           console.log(delDice)

//           difference = dices.filter(x => !delDice.includes(x))

//         }
//       }


//     })


//     console.log(aantalDices)
//     if(aantalDices <= 1){

//        displScore.innerHTML = score + "het spel is afgelopen"
//     }
//     displScore.innerHTML = score
//   dices = [] 
//   delDice = []
//   console.log(dices)
//   console.log(difference)
//   console.log(delDice)
//   console.log(score) 
//   }

//doubleDices() //double in array ok, double uit oorspronkelijke array = difference,  optellen doubles ok
let allIndex = []
let count = 0
function yatzee() {

  if (throws == 0 || aantalDices <= 1) {
    console.log("einde spel")
    console.log(dices)
    difference.map(x => score += x)
    console.log(score)
    displScore.innerHTML = `het spel is ten einde, jouw score:${score}`
    displDices.innerHTML = difference
    differ.innerHTML += delDice
btn.style.display = "none"
  } else {
    for (let x = 0; x < aantalDices; x++) {
      let dice = Math.ceil(Math.random() * 6)
      dices.push(dice)
    }

    throws--
    dices.map((dice, index) => {
      for (let y = 0; y < dices.length; y++) {
        if (dice == dices[y] && index != dices.indexOf(dices[y])) {
count ++
delDice.push(dices[y])
if(count > 5){
  for(let s = 0; s < count/2 ; s++){
     delDice.shift(dices[y])
  }
 
}
          

        }
      }
      difference = dices.filter(x => !delDice.includes(x))

    })


    aantalDices -= delDice.length
console.log(count)
   

    delDice.map(x => score += x)

 displDices.innerHTML = dices
  displScore.innerHTML = score  
  for(let c = 0; c< delDice.length; c++){
    delDice.map((elem, index)=>{
    if(delDice[c] != elem && c == index){
 delDice.splice(c,0)
}
console.log(delDice)
    })

  }
  }


  console.log(dices)
 
 
  differ.innerHTML += delDice + "<br>"
    delDice = []
  dices = difference
  console.log(difference)
  console.log(delDice)
  console.log(score)
  dices = []

}



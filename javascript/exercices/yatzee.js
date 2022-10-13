//5 teerlingen
//als er dubbels inzitten, eruit halen en de ogen optellen
//na 3 keer gooien alles optellen
//als 5 dezelfde 100punten
let displDices = document.querySelector(".dices")
let btn = document.querySelector('#throwDice')
let displScore = document.querySelector('#score')
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

//als aantal dices = 0 nog oplossen
  function throwDices(){
      for (let x = 0; x < aantalDices; x++) {
    let dice = Math.ceil(Math.random() * 6)
    dices.push(dice)
  }
  displDices.innerHTML = dices
  doubleDices()
  }
  btn.addEventListener('click', 
throwDices)
 
  let score = 0
  let delDice = []
  let difference
  function doubleDices() {
    dices.map((dice, index) => {
      for (let y = 0; y < dices.length; y++) {
        if (dice == dices[y] && index != dices.indexOf(dices[y])) {
          delDice.push(dice)
          //console.log(dices)
          console.log(delDice)

          difference = dices.filter(x => !delDice.includes(x))
  
        }
      }
  
  
    })
  delDice.map(x=> score += x)
  console.log(aantalDices)
    aantalDices -= delDice.length
    console.log(aantalDices)
  displScore.innerHTML = score
  dices = difference 
  console.log(dices)
  console.log(difference)
  console.log(delDice)
  console.log(score) 
  }
 
  //doubleDices() //double in array ok, double uit oorspronkelijke array = difference,  optellen doubles ok
 
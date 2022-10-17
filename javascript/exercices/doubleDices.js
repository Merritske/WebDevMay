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
  shakeDices)



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
let hoedje = document.querySelector("svg")
function shakeDices() {
  hoedje.classList.add('shake')
  displDices.classList.remove('dicesResult')
  displDices.innerHTML = ""
  setTimeout(yatzee, 3000)
}

function yatzee() {
  hoedje.classList.remove('shake')
  displDices.classList.add('dicesResult')
  console.log(difference)
  console.log(delDice)
  console.log(dices)
  console.log(count)
  console.log(aantalDices)
  
    //throw dices
    // for (let x = 0; x < aantalDices; x++) {
    //   let dice = Math.ceil(Math.random() * 6)
    //   dices.push(dice)
    // }
    dices = [3,3,3,3,3]
    throws--
    //dubbels vinden
    dices.map((dice, index) => {
      for (let y = 0; y < dices.length; y++) {
        if (dice == dices[y] && index != dices.indexOf(dices[y])) {
          count++
          delDice.push(dices[y])
          if (count > 5 && dice == dices[y]) {
            for (let s = 0; s < count / 2; s++) {
              delDice.shift(dices[y])
            }
        
          }
         
        }
      }
      //verschil tussen dices en delDices om te weten aantalDices
      difference = dices.filter(x => !delDice.includes(x))
      console.log(difference)    
      displDices.innerHTML = difference  
      // if(count == 8){
      //     eindeGame(difference)
      //     console.log('yep')
      //     console.log(score)
      //     }
    })
 aantalDices -= delDice.length
  
    //console.log(delDice)
    //score
    delDice.map(x => score += x)
 count ==8? displScore.innerHTML = `het spel is ten einde, jouw score:${score}`:displScore.innerHTML = "score: " + score

    //als meer dan 2 

    for (let c = 0; c < delDice.length; c++) {
      delDice.map((elem, index) => {
        if (delDice[c] != elem && c == index) {
          delDice.splice(c, 0)
        }
       // console.log(delDice)
      })
   
    }
  

    console.log(difference)
    console.log(delDice)
    console.log(dices)
    console.log(count)
    console.log(aantalDices)
     if (throws == 0 || aantalDices <= 1 || count ==8 || count ==12 || count == 20) {
      if(count==20){
displScore.innerHTML = `Congratulations you have thrown 
5 dices with the same number!!!<br> How lucky can you be 😎` 
btn.style.display = "none"     
}else{
        eindeGame(difference)
      }
      
  }
  


  //console.log(dices)


  differ.innerHTML += delDice + "<br>"
  delDice = []

  dices = difference
  dices = []
  console.log(difference)
  console.log(delDice)
  console.log(dices)
  console.log(count)
  console.log(aantalDices)
}

function eindeGame(difference){
  console.log("einde spel") 
  difference.map(x => score += x)
  displScore.innerHTML = `het spel is ten einde, jouw score:${score}`
  displDices.innerHTML = difference
  btn.style.display = "none"
  console.log(difference)
  console.log(delDice)
  console.log(dices)
  console.log(count)
  console.log(aantalDices)
  console.log(score)
}
//nog andere versie maken: zoals echte yatzee
//zelfde als geselecteerde eruit nemen

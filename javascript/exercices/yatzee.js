//5 teerlingen
//als er dubbels inzitten, eruit halen en de ogen optellen
//na 3 keer gooien alles optellen
//als 5 dezelfde 100punten
let displDices = document.querySelector(".dices")
let dices = []

function throwDices(){
for(let x = 0; x<=5 ; x++){
let dice = Math.ceil(Math.random()*6)
dices.push(dice)
}
}
throwDices() //ok
displDices.innerHTML = dices
let score = []
let delDice = []

function doubleDices(){
  dices.map((dice, index)=>{
    for(let y = 0 ; y< dices.length; y++){
        if(dice == dices[y] && index != dices.indexOf(dices[y])){
            console.log(dice)
         
         delDice.push(dice)
         //dices.splice( index,1 )
         //  score += dice
          //console.log(dices)
         console.log(delDice)
        // for(let a = 0; a<delDice.length;a++){
        //     if(delDice[a] == dices[y]){
        //         dices.splice(index,1)
        //     }
        // }
        }
    }
  })

//     for(let i = 0; i<dices.length; i++){
//         if(dices[y] == dices[i] &&   dices.indexOf(dices[y]) != dices.indexOf(dices[i])){
// console.log(dices[y])
//         }
//     }
    
//}
console.log(dices)
}
doubleDices() //double in array ok, nog double uit de oorspronkelijke array halen + optellen doublles
console.log(dices)
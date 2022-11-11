let displayResult = document.querySelector(".resultaat")
let clear = document.querySelector('.clear')
let res = document.querySelector('#result')

clear.addEventListener('click', ()=> displayResult.innerHTML = "")


//als met komma getallen wordt gewerkt nog oplossen
class Calc {
    constructor(num1, num2, operator) {
        this.result = 0,
            this.operator = operator,
            this.num1 = num1,
            this.num2 = num2
    }
    getResult(operator) {
        switch (this.operator) {
            case "+":
                this.result = this.num1 + this.num2
                return this.result
                break;
            case "-":
                if (this.num1 > this.num2) {
                    this.result = this.num1 - this.num2
                } else {
                    this.num2 - this.num1
                }
                return this.result
                break;
            case "*":
                this.result = this.num1 * this.num2
                return this.result
                break;
            case "/":
                this.result = this.num1 / this.num2
                return this.result
                break;
            default:
                alert("not a valid operator")
        }
    }
    toString() {
        console.log(`${this.num1} ${this.operator} ${this.num2} = ${this.result}`)
    }
}

let one = new Calc(5, 2, "+")

one.getResult()
one.toString()

let num;
let num1 = [];
let num12 = 0;
let num2 = 0;
let cijfer = document.querySelectorAll(".cijf")
let oper = document.querySelectorAll(".oper")
console.log(cijfer)
//cijfers invullen 
cijfer.forEach(val => {
    val.addEventListener('click',
        function (e) {
            e.preventDefault()
            let getal = val.id
            console.log(getal)
            num1.unshift(getal)
            console.log(num1)
            displayResult.innerHTML += getal
        })
}
)
console.log(num1.length)
function cijfers() {
    console.log(num1.length)
  
if(num2 == 0 && num12 != 0){  
  //als komma getallen worden gebruikt=> nog oplossen
    for (let x = 0; x < num1.length; x++) {
        num = (num1[x] * 10 ** x)
        console.log(num)
        num2 += num
    }
    console.log(num2)
    num1 = []
}else{
     for (let x = 0; x < num1.length; x++) {
        num = (num1[x] * 10 ** x)
        console.log(num)
        num12 += num
    }
    num1 = []
} 
}

console.log(num12)


console.log(oper)
function operat() {
    oper.forEach(operant => {
        operant.addEventListener('click', function (e) {
            console.log(typeof operant.id)
            cijfers()
            displayResult.innerHTML += operant.id
            e.preventDefault()
            console.log(num12)
            console.log(num2)
            //ZO WERKTE HET
            // let two = new Calc(num12, num2, operant.id)
            // two.getResult(operant.id)
            // two.toString()
            //WERKT NIET ZO
            res.addEventListener('click', ()=> {
    displayResult.innerHTML += "="
    let two = new Calc(num12, num2, operant.id)
    two.getResult(operant.id)
    two.toString()
})
        })
    })

}
operat()


//num1 moet getoont worden op het scherm, operator en num2
//als op = druk
//berekening moet gebeuren => calc
//  num1, num2 en operator moeten in een nieuwe Calc gezet worden
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
                console.log("not a valid operator")
        }
    }


    toString() {
        console.log(`${this.num1} ${this.operator} ${this.num2} = ${this.result}`)
    }
}

let one = new Calc(5, 2, "+")

one.getResult()
one.toString()


let num1 = [];
let num2 = [];
let cijfer = document.querySelectorAll(".cijf")
let oper = document.querySelectorAll(".oper")
console.log(cijfer)
//cijfers invullen
function cijfers(num) {
    cijfer.forEach(val => {
        val.addEventListener('click', function (e) {
            e.preventDefault()
            num.push(val.id)
           
           
        })
     
    }
    )    
    console.log(num)
   //    num = num.split(",") 
   //array nog maken dat de nummers achter elkaar staan
        
}


console.log(oper)
function operat(){
    cijfers(num1)
    oper.forEach(operant=>{
        operant.addEventListener('click', function(e){
            console.log(typeof operant.id)
            e.preventDefault()
            let two = new Calc(num1, num2, operant.id)
            two.getResult(operant.id)
            two.toString()
        })
    })
    cijfers(num2)
}
operat()


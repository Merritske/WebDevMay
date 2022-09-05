// class Calc{
//     constructor(num1, num2){
//         this.result = 0;
//         this.num1 = num1;
//         this.num2 = num2;
//     }
// add(){
//     return this.result = this.num1 + this.num2
// }
// substract(){
//     return this.result = this.num1 - this.num2
// }
// multiply(){
//     return this.result = this.num1 * this.num2
// }
// divide(){
//     return this.result = this.num1 / this.num2
// }
// toString(){
//     console.log(`Result is ${this.result}`)
// }
// }
// let res = new Calc(10,5);
// //math operations
// res.add();
// res.divide();
// res.substract();
// res.multiply();
// res.toString();


// class Calc {
//     constructor(num1, num2, operator) {
//         this.operator = operator;
//         this.num1 = num1;
//         this.num2 = num2;
//         this.result = 0;
//     }
//     getResult() {
//         switch (this.operator) {
//             case "+":
//                 this.result = this.num1 + this.num2;
//                 break;
//             case "-":
//                 this.result = this.num1 - this.num2;
//                 break;
//             case "*":
//                 this.result = this.num1 * this.num2;
//                 break;
//             case "/":
//                 this.result = this.num1 / this.num2;
//                 break;
//                 default:
//                     console.log("invalid operator")
//         }
//     }

//     toString(){
//         console.log(`${this.num1} ${this.operator} ${this.num2} = ${this.result}`)
//     }
// }
// let app = new Calc(10,5,'*')
// app.getResult()
// app.toString()
// let app2 = new Calc(27,9,'/')
// app2.getResult()
// app2.toString();

class Calc {
    constructor(num1, num2, operator) {
        this.operator = operator;
        this.num1 = num1;
        this.num2 = num2;
        this.result = 0;
    }
    //put operator in the function
    getResult(operator) {
        this.operator = operator
        switch (this.operator) {
            case "+":
                this.result = this.num1 + this.num2;
                break;
            case "-":
                this.result = this.num1 - this.num2;
                break;
            case "*":
                this.result = this.num1 * this.num2;
                break;
            case "/":
                this.result = this.num1 / this.num2;
                break;
                default:
                    console.log("invalid operator")
        }
    }

    toString(){
        console.log(`${this.num1} ${this.operator} ${this.num2} = ${this.result}`)
    }
}
let app = new Calc(5,3)
app.getResult('-')
app.toString()
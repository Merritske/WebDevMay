// let result = [];
// let tussenR = [];
// let a;
// let b;
// let c;
// let i;
// function sum(n) {
//    // console.log(n)
//    for (let x of n) {
//       x = x * 1
//       tussenR.push(x)
//    }
//    // console.log(tussenR)
//    for (let y = 0; y < tussenR.length; y++) {
//       a = tussenR[y]
//       i = y + 1
//       b = tussenR[i]
//       if (!isNaN(a) && isNaN(b)) {
//          a = a.toString()
//          result.push(a)
//       } else if (!isNaN(a) && !isNaN(b)) {
//          a = a.toString()
//          b = b.toString()
//          c = a + b
//          result.push(c)
//          y++

//       }
//    }
// }
// sum("kl+-5;2d42m65ki88z")
// console.log(result) //enkel met 2 cijfers

//TWEEDE OPLOSSING met zoveel cijfers na elkaar als je maar wil
let result = [];
let tussenR = [];
let eindR = [];
let a;
let i;
let b=[];
function sum(n){
console.log(n.length)
for(let x = 0; x< n.length;   x++){
      while(!isNaN(n[x])){
         //console.log('iej')
         a = n[x] 
         a = a*1
         tussenR.push(a) 
   x++
       }
       if(isNaN(n[x])){
 console.log(tussenR)  
 result = tussenR.join('')
  console.log(result) 
  if(result !== ''){
       eindR.push(result)
  }

  tussenR = []
       }
} 
}
totaal = 0
sum("kp5dl85dml4589fsd")
for(let x = 0; x< eindR.length; x++){
  let y = parseInt(eindR[x])
  totaal += y
}
console.log(eindR)
console.log(totaal)

//oplossing Atilla 
let str = 'abc23#$%23^&*()42\/'
let sm = str.split('').map(x => {
    if (!isNaN(x)) {
        return parseInt(x)
    }
}).join(' ').split('  ').filter(x => {
    return x !== ''
}).map(x => {
    return x.split(' ').join('')
}).filter(x => x != '').reduce((a, b) => parseInt(a) + parseInt(b))
console.log(sm)

//reducer VOORBEELD


const characters = [
      { name: 'Jean-Luc Picard', age: 59 },
      { name: 'Will Riker', age: 29 },
      { name: 'Deanna Troi', age: 29 }
    ];
    // Start with an empty object, increment `map[age]` for each element
// of the array.
const reducer = (map, val) => {
      if (map[val] == null) {
        map[val] = 1;
      } else {
        ++map[val];
      }
      return map;
    };
   
    console.log( characters.map(char => char.age).reduce(reducer, {})) //{ '29': 2, '59': 1 }
//ANDER VOORBEELD MET REDUCE
    const dates = [
      '2019/06/01',
      '2018/06/01',
      '2019/09/01', // This is the most recent date, but how to find it?
      '2018/09/01'
    ];
    // This works because you can compare JavaScript dates using `>` and `<`.
// So `a > b` if and only if `a` is after `b`.
const maxDate = dates.reduce((max, d) => d > max ? d : max, dates[0]);
console.log(maxDate)

//ANDER VOORBEELD REDUCE

const lineItems = [
      { description: 'Eggs (Dozen)', quantity: 1, price: 3, total: 3 },
      { description: 'Cheese', quantity: 0.5, price: 5, total: 2.5 },
      { description: 'Butter', quantity: 2, price: 6, total: 12 }
    ];
    lineItems.map(li => li.total).reduce((sum, val) => sum + val, 0);
  //Abstract out the reducer into a function sum(), 
  //and reuse it wherever you need to sum up an array.

// Sum the totals
lineItems.map(li => li.total).reduce(sumReducer, 0);

// Sum the quantities using the same reducer
lineItems.map(li => li.quantity).reduce(sumReducer, 0);

function sumReducer(sum, val) {
  return sum + val;
}
//This is important because, while you think sumReducer() will never change, 
//it will. 
//For example, the above code doesn't account for the fact that 0.1 + 0.2 !== 0.3 in JavaScript. 
//This is a common mistake when calculating prices in an interpretted language. 
//Binary floating points are weird. So you actually need to round:

// const { round } = require('lodash');

// function sumReducer(sum, val) {
//   // Round to 2 decimal places.
//   return _.round(sum + val, 2);
// }
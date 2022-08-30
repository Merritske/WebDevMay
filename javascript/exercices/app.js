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
         console.log('iej')
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

sum("kp5dl85dml4589fsd")
console.log(eindR)
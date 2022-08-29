let result = [];
 let tussenR = [];
 let a;
 let b;
 let c;
 let i;
function sum(n){
   // console.log(n)

    for(let x of n){   
        x= x*1
           tussenR.push(x)
    }  
            // console.log(tussenR)
           for(let y = 0; y<tussenR.length; y++){
 a = tussenR[y]  
i = y+1
b = tussenR[i]
if(!isNaN(a) && isNaN(b)  ){
      a = a.toString()
   result.push(a)
}else if(!isNaN(a) && !isNaN(b))
{
    a = a.toString()
b = b.toString()
c = a+b
 result.push(c)
 y++
   
}

}   

      }      
sum("kl+-5;2d42m65ki88z")
console.log(result)
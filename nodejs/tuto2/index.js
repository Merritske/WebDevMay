// Custom modules 
const {SumModule, getName,getAge,getTodos,addName,names} = require('./my_modules/sum')

// get result of summodule 
// console.log(SumModule)

 console.log(getName('John Doe'))
 console.log(getAge(25))

getTodos()
.then(data=>{
    console.log(data)
})
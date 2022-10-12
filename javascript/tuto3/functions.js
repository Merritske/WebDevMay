console.log("hello world")

/* 
regular functions
arrow functions
*/

// function getSum(){
//     //her comes function scope
//     var getResult = 1 + 1;
//     console.log("some function", getResult);
//     return 0; //after the code is executed, the function returns 0, so return at the end of the function
// }
// getSum(); //called back function

// console.log(getSum()); //0

// function getSumOfNum (n1,n2){
//    // console.log(n1, n2)
//     return n1 + n2
// }
// //getSumOfNum(1,2);
// //getSumOfNum({age:30}, true)
// console.log(getSumOfNum(5, 8))

var student={
    name: "John",
    age: 30,
    isStudent: true,
    scores:[1,2,3,4,5]
}
// function getStudent(studentParams){
//     console.log(studentParams)
//     let isStudent = studentParams.isStudent
//     console.log(isStudent)
//     return isStudent? `NAME: ${studentParams.name} \nAGE: ${studentParams.age}\nSCORES:${student.scores.toString()}`: "he is not a student"
// }

const getStudent = (studentParams) => {
    let isStudent = studentParams.isStudent
    return isStudent? `NAME: ${studentParams.name} \nAGE: ${studentParams.age}\nSCORES:${student.scores.toString()}`: "he is not a student"
}
console.log(getStudent(student));

//BMI calculator: weight/(height*height)
function getBmi(w, h){
    let bmi = (w/(h*h)).toFixed(2)
   console.log(bmi)
}
getBmi(60,1.7)
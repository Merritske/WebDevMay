const userInput = document.querySelector('.userinput');
const savebtn = document.querySelector('.savebtn');
const getbtn = document.querySelector('.getbtn')
let user;
// setTimeout(()=>{
//     user = prompt("enter your username")
// },2000)
// setInterval(()=>{
//     user = prompt("enter your username")
//     if(JSON.parse(localStorage.getItem('users')) !== null){
//         let getstorageData = JSON.parse(localStorage.getItem('users')) 
//         getstorageData.push(user)
//         localStorage.setItem('users', JSON.stringify(getstorageData))
//      console.log(users)  }else{
//         let users = []; //create array als deze nog niet bestaat
//         users.push(userInput.value)
//         localStorage.setItem('users', JSON.stringify(user))
//   }   
// },2000)

// document.addEventListener('contextmenu', ()=>{
//     alert('right klik')
// })
//document.oncontextmenu = true

// document.addEventListener('selectstart', ()=>{
//     console.log('selected something')
// })



// savebtn.addEventListener('click', ()=>{
//     // console.log(userInput.value)
//     // localStorage.setItem('user', userInput.value)
//   if(JSON.parse(localStorage.getItem('user')) !==null){
//       let getstorageData = JSON.parse(localStorage.getItem('user')) 
//     //parse dient om JSON terug om te zetten naar gewone data
//     getstorageData.push(userInput.value)
//     localStorage.setItem('user', JSON.stringify(getstorageData))
// }else{
//     let user = []; //create array als deze nog niet bestaat
//     user.push(userInput.value)
//     localStorage.setItem('user', JSON.stringify(user))
// }
// })

getbtn.addEventListener('click', ()=>{
    let usernames = JSON.parse(localStorage.getItem('user'))
    console.log('user list: '+ usernames)
    
//nieuwe window openen
    window.open('https://intecbrussel.be', '_blank', 'width=800px, height=500px')
   
})

// document.addEventListener('keyup', (e)=>{
// let logs = localStorage.getItem('logs')
// logs += `${e.key}`;
// console.log(logs)
// localStorage.setItem('logs', logs)
//})



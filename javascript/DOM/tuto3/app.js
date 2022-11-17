const userInput = document.querySelector('.userinput');
const savebtn = document.querySelector('.savebtn');
const getbtn = document.querySelector('.getbtn')

savebtn.addEventListener('click', ()=>{
    // console.log(userInput.value)
    // localStorage.setItem('user', userInput.value)
  if(JSON.parse(localStorage.getItem('user')) !==null){
      let getstorageData = JSON.parse(localStorage.getItem('user')) 
    //parse dient om JSON terug om te zetten naar gewone data
    getstorageData.push(userInput.value)
    localStorage.setItem('user', JSON.stringify(getstorageData))
}else{
    let user = []; //create array als deze nog niet bestaat
    user.push(userInput.value)
    localStorage.setItem('user', JSON.stringify(user))
}
})

getbtn.addEventListener('click', ()=>{
    let usernames = JSON.parse(localStorage.getItem('user'))
    console.log('user list: '+ usernames)
})

// document.addEventListener('keyup', (e)=>{
// let logs = localStorage.getItem('logs')
// logs += `${e.key}`;
// console.log(logs)
// localStorage.setItem('logs', logs)
//})

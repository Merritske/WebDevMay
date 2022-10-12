let result;
let lead = document.querySelector('.lead')
let date =  new Date();
result = date.getFullYear()
result = date.getMonth()

result = date.toLocaleString('tr-TR', {timeZone:'Turkey', day: "2-digit", month:'long', year:'numeric'})
var hours, minutes, seconds
//TIKKENDE KLOK
// window.setInterval(updateTime, 1000)
// function updateTime(){
//     let date2 = new Date()
//     hours = date2.getHours()
// minutes = date2.getMinutes()
// seconds = date2.getSeconds()
// result = `${hours}:${minutes}:${seconds}`
// lead.innerHTML = result
// }
let dag = ["zon", "ma", "di", "woe", "do", "vrij", "za"]
lead.innerHTML = dag[date.getDay()]



//MATH OBJECT
let numbers = [1,25,69,42,31,20]
result = Math.max(numbers) //NAN
result = Math.max(...numbers) //69
result = Math.min(...numbers) //1

//get a random range between a max and a min
function getRandomNaumberRange(min, max){
    return Math.round(Math.random()*(max-min)+min)
}
result = getRandomNaumberRange(5,20)
console.log(result)

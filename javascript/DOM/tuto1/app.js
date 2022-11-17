var result;

//document object
result = document;
result = document.all;
result = document.URL;
result = document.links;
result = document.images;
result = document.scripts;
result = document.firstChild;
result = document.body.firstChild;
result = document.body.firstElementChild.textContent;
result = document.body.firstElementChild.innerHTML += "<br>HOEHOE";
result = document.body.firstElementChild.textContent;
document.Calculator = function(){
    console.log("calcul")
}
document.NumberConvert = (number)=>{
    return parseInt(number)
}

//ELEMENTEN TOEVOEGEN
const parser = new DOMParser();
let htmlString = "<h3>Hello Poepie</h3>"
//parse html string to real DOM object
let getRealElement = parser.parseFromString(htmlString, 'text/html')
//een heel nieuw html document is gemaakt
result = document.body.append(getRealElement.body.firstChild)

//andere manier, zonder html document te moeten maken
const range = document.createRange()
const realDomObject = range.createContextualFragment("<h2 style='color:red'>Hello honey</h2>")
//document.body.append(realDomObject)
result = document.body.appendChild(realDomObject)

//andere manier
const welkommes = document.createElement("h3")
welkommes.setAttribute('style', 'color: green')
welkommes.setAttribute('class', 'welkom')
welkommes.innerText = "hello message"
document.body.appendChild(welkommes)

//EVENTS
result = document.onclick = function(){
    console.log('hello click')
} //eender waar je klikt in het document

result = document.contains(welkommes) //true

//window object
result = window
//result = window.alert('welkom')
result  =window.atob('kdhgsgd') //geeft rare tekens
result = window.navigator //geeft info over pc, credentials,...
result = window.location //.reload() om de page te refreshen 
//enkel in onclick of zoiets anders zit die in een loop vast

result = window.localStorage.getItem("data") //key aanwezig in localstorage met een value
window.localStorage.removeItem("dat2") //key aanwezig in localstorage met een value
localStorage.setItem('data1', 'koekies')//key value pair
localStorage.setItem('names', ['Jos', 'Eddy'])
var students = [{name:"a"}, {name:"b"}] //array met objects
localStorage.setItem('people', JSON.stringify(students))

localStorage.clear()//maakt localstorage leeg

console.log(result)
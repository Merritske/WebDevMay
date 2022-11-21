var result;

result = document.getElementById('navbarNav');
result = document.getElementsByClassName('nav-item')
result = document.querySelector('.row')
//target html elements
result.children[0].children[0].setAttribute('src','https://img.freepik.com/vrije-vector/hand-getekend-sinterklaas-dag-concept_23-2148707690.jpg?w=2000' )

result = document.getElementsByTagName('p')//HTML-collection -> not itterable
//result = Array.from(result) //om HTML-collection om te vormen tot array
result = Array.from(result).forEach((e)=>{
    e.innerText = "blabla"
})

result = document.querySelectorAll('.card')//nodeList -> iterable
result.forEach((e)=>{
    e.innerHTML += '<p>Sinterklaas is in het land!</p>'
})
//NOG OPZOEKEN window.scroll
console.log(window.scrollY)

console.log(result)
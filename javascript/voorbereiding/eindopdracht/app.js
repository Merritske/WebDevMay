console.log("hello")

let introInput = document.getElementById("welkomsttekst")
let welkom = document.getElementById("welkom")

function myWelkom(){
    console.log(introInput.value)
welkom.innerHTML = `Welkom ${introInput.value}!`
document.getElementById("welkom").style.display = "block"
document.getElementById("introForm").style.display = "none"
}

let toonNav = false;
let projects = document.getElementById('projects')
function showProjects(){
   toonNav = !toonNav
   if(toonNav){
    projects.style.display ="block"
   } else{
    projects.style.display ="none"
   }
}
let blogArray = [];
let blogInhoud = document.querySelectorAll(".blogInhoud");
let blogTitel = document.querySelectorAll(".blogTitel");
let toonBlog = false;
function showBlog(e){
   toonBlog = true;
    console.log(toonBlog)
console.log(blogInhoud)
console.log(blogTitel)
     for(let x = 0 ; x<blogTitel.length; x++){  
         if(toonBlog && (blogInhoud[x].style.display = "block")){ 
    if(blogTitel[x].innerHTML == e.firstChild.nextElementSibling.innerHTML ){
 
         blogInhoud[x].style.display = "block"
    }else{
         blogInhoud[x].style.display = "none"
}
    }
 }
   }

//    let inputBlogTitel = document.getElementById("inputBlogTitel")
//  let inputBlogTekst = document.getElementById("inputBlogTekst")
// let blog = document.querySelector(".blog")
// function blogOpslaan(){
  
//     blog.innerHTML += `<li onclick="showBlog(this)">
//     <h3  class="blogTitel">${inputBlogTitel.value} </h3> 
//     <p class="blogInhoud">${inputBlogTekst.value}</p>
// </li> ` 
// blogArray = [...blogArray, {
//     blogTitel: inputBlogTitel.value,
//     blogInhoud: inputBlogTekst.value
// }]
// console.log(blogArray)
// inputBlogTitel.value = "";
// inputBlogTekst.value = ""
// }


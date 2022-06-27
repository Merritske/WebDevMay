console.log("hello")

let introInput = document.getElementById("welkomsttekst")
let welkom = document.getElementById("welkom")

function myWelkom(){
    console.log(introInput.value)
welkom.innerHTML = `Welkom ${introInput.value}!`
document.getElementById("welkom").style.display = "block"
document.getElementById("introForm").style.display = "none"
}

////KAN OOK GEWOON IN CSS MET HOVER
//  let toonNav = false;
// let projects = document.getElementById('projects')
// function showProjects(){
//    toonNav = !toonNav
//    if(toonNav){
//     projects.style.display ="block"
//    } else{
//     projects.style.display ="none"
//    }
// }

// //OFWEL DIT = BASIC VOOR DE OEFENING
 let blogInhoud = document.querySelectorAll(".blogInhoud");
let blogTitel = document.querySelectorAll(".blogTitel");
let blog = document.querySelector(".blog")

// function showBlog(e){
// console.log(e.firstChild.nextElementSibling.innerHTML)
//      for(let x = 0 ; x<blogTitel.length; x++){  
//          console.log(blogTitel[x].innerHTML)
//     if(blogTitel[x].innerHTML == e.firstChild.nextElementSibling.innerHTML){

//          blogInhoud[x].style.display = "block"
//        //  blogInhoud[x].style.visibility = "visible"
//     }else{
//          blogInhoud[x].style.display = "none";
//         // blogInhoud[x].style.visibility = "hidden"
// }
//     }
//  }

//  //OFWEL DIT = UITBREIDING VAN DE OEFENING
   let blogArray = [];  
    let inputBlogTitel = document.getElementById("inputBlogTitel")
 let inputBlogTekst = document.getElementById("inputBlogTekst")

function blogOpslaan(){
    console.log(introInput.value)
    if(introInput.value == ""){
        alert("geef je naam")
    }else{
            blog.innerHTML += `<li onclick="showBlog(this)">
    <h3  class="blogTitel">${inputBlogTitel.value} </h3> 
    <p class="blogInhoud">${inputBlogTekst.value}</p>
</li> ` 
console.log(inputBlogTekst.value)
    blogArray.push({
    blogTitel: inputBlogTitel.value,
    blogInhoud: inputBlogTekst.value
}) 
console.log(blogArray)
    localStorage.setItem("blog", JSON.stringify(blogArray))
    }

console.log(blogArray)
inputBlogTitel.value = "";
inputBlogTekst.value = ""
}
window.addEventListener("DOMContentLoaded", function(){
       console.log(blogArray.length)    
       blogArray = JSON.parse(localStorage.getItem("blog"))
if(blogArray.length != 0){ 
   
  blogArray.map((item)=>{
     console.log(item.blogInhoud)
    blog.innerHTML +=  `<li onclick="showBlog(this)">
    <h3  class="blogTitel">${item.blogTitel} </h3> 
    <p class="blogInhoud">${item.blogInhoud}</p>
</li> ` 
   })
}else if(blogArray.length == 0 ){
    console.log("hoep")
   alert("voeg iets in in de blog")
}
 console.log(blogArray)
  
})

   function showBlog(e){
  console.log(introInput.value)
  for(let x = 0; x< blog.children.length; x++){  
    console.log(blog.children[x].lastChild.previousSibling.innerHTML)
      if(e.firstChild.nextElementSibling.innerHTML == blog.children[x].firstChild.nextElementSibling.innerHTML){
     blog.children[x].lastChild.previousSibling.style.display = "block"
      }else{
        blog.children[x].lastChild.previousSibling.style.display = "none"
     }
 }
}   

let zoek = document.getElementById("zoek")
let zoekresultaat = document.getElementById("zoekresultaat")
function zoekBlog(){
   
    for(let z = 0; z< blogArray.length;z++){ 
    let b= blogArray[z].blogTitel ;  
    console.log(b)    
     let a = zoek.value;
     console.log(b.includes(a))  
       if(b.includes(a)){
           console.log(blog.children[z])
           blog.children[z].style.display = "block"       
         }else{
            blog.children[z].style.display = "none" } 
    }
}


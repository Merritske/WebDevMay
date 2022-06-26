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
// let toonBlog = false;
function showBlog(e){
 //  toonBlog = true;
console.log(e.firstChild.nextElementSibling.innerHTML)
     for(let x = 0 ; x<blogTitel.length; x++){  
         console.log(blogTitel[x].innerHTML)
    if(blogTitel[x].innerHTML == e.firstChild.nextElementSibling.innerHTML){

        // blogInhoud[x].style.display = "block"
         blogInhoud[x].style.visibility = "visible"
    }else{
         //blogInhoud[x].style.display = "none";
         blogInhoud[x].style.visibility = "hidden"
}
    }
 }

//  //OFWEL DIT = UITBREIDING VAN DE OEFENING
//    let blogArray = [];
// window.addEventListener("DOMContentLoaded", function(){
//    blogArray = JSON.parse(localStorage.getItem("blog"))
//    blogArray.map((item)=>{
//     blog.innerHTML +=  `<li onclick="showBlog(this)">
//     <h3  class="blogTitel">${item.blogTitel} </h3> 
//     <p class="blogInhoud">${item.blogInhoud}</p>
// </li> ` 
//    })

// })

//    function showBlog(e){
//   for(let x = 0; x< blog.children.length; x++){  
//     console.log(blog.children[x].firstChild.nextElementSibling.innerHTML)
//       if(e.firstChild.nextElementSibling.innerHTML == blog.children[x].firstChild.nextElementSibling.innerHTML){
//      blog.children[x].lastChild.previousSibling.style.display = "block"
//       }else{
//         blog.children[x].lastChild.previousSibling.style.display = "none"
//      }
//  }
// }

//    let inputBlogTitel = document.getElementById("inputBlogTitel")
//  let inputBlogTekst = document.getElementById("inputBlogTekst")

// function blogOpslaan(){
//     blog.innerHTML += `<li onclick="showBlog(this)">
//     <h3  class="blogTitel">${inputBlogTitel.value} </h3> 
//     <p class="blogInhoud">${inputBlogTekst.value}</p>
// </li> ` 

// blogArray = [...blogArray, {
//     blogTitel: inputBlogTitel.value,
//     blogInhoud: inputBlogTekst.value
// }]
// localStorage.setItem("blog", JSON.stringify(blogArray))
// console.log(blogArray)
// inputBlogTitel.value = "";
// inputBlogTekst.value = ""
// }


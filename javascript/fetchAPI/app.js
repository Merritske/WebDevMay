//fetch and filter

async function GetData(){
    let response = await fetch("https://jsonplaceholder.typicode.com/users")
let data = await response.json()
return data
}


// GetData()
//     .then(data => {
//         // console.log(data)
//         let users = []
//         data.map(user => {
//             const obj = {
//                 id: user.id,
//                 name: user.name,
//                 username: user.username,
//                 email: user.email
//             }
//             //  console.log(obj)
//             users.push(obj)
//         })
//         return users;
//     })
//     .then(data=>{
//         console.log(data)
//     })

GetData()
.then(data=>{
    return data.map(({username,email})=>({username,email}))
})
.then(data=>{
    console.log(data)
})

let getBtn = document.getElementById('get')
let postBtn = document.getElementById('post')
let putBtn = document.getElementById('updatePOST')
let patchBtn = document.getElementById('updatePATCH')
let delBtn = document.getElementById("del")

//GET
getBtn.addEventListener('click', (e)=>{
    console.log("hello GET")
    fetch("http://localhost:5000/api")
    .then(res=>res.json())
    .then(data=>{
        console.log(data)
    })
    e.preventDefault()
})

//PUT
putBtn.addEventListener('click', (e)=>{
    fetch('http://localhost:5000/api/2',{
        method: 'PUT',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "username": "Joe DAlton"
        })
    })
    .then(res=>res.json())
    .then(data=>{
        console.log(`PUT request: ${data}`)
    })
    e.preventDefault()
    })

//PATCH
patchBtn.addEventListener('click', (e)=>{
    fetch("http:localhost:5000/api/2", {
        method: 'PATCH',
        headers:{
             'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "password": "root12345"
            })
    })
    .then(res=>res.json())
    .then(data=>{
        console.log(`PATCH request: ${data}`)
    })
})

//POST
postBtn.addEventListener('click',(e)=>{
    e.preventDefault()
    fetch("http:localhost:5000/api",{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "username": "student1",
            "password": "12345"
        })
    })
    .then(res=>res.json())
    .then(data=>{
        console.log(`POST request ${data}`)
    })
})

//DELETE
deleteBtn.addEventListener('click',(e)=>{
    e.preventDefault()
    fetch('http://localhost:5000/api/3',{
        method:'DELETE'
    })
    .then(res=>res.json())
    .then(data=>{
        console.log('deleted: ',data)
    })
})
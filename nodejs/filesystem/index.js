//index.html
//login.html



// import fs module 
const fs = require('fs'); // fs is a core module

// read file
fs.readFile('./test.txt', 'utf8', (err, data) => {
  //console.log(typeof data) // convert buffer to string
//console.log(data.split(",")) // convert text into array
  // data.split(",").forEach(name=>console.log(name))
    // let binaryData = ""
    // for(let i=0; i<data.length;i++){
    //     let newData = data[i].charCodeAt(0).toString(2)
    //     binaryData+=newData
    // }
    // console.log(binaryData)
})

// read a directory
// fs.readdir('./',(err,data)=>{
//     // console.log(data)
//     let dirList = data.filter(filename=>filename.includes('.jpg'))
//     console.log(dirList)
// })

// read two files 
// fs.readdir('./',(err,data)=>{
//     // console.log(data) // list of all files in dir
//     let TxtFiles = data.filter(file=>file.includes('.txt')) // list of txt files
//     //console.log(TxtFiles)
//     // fs.readFile(TxtFiles[0],'utf8',(err,data)=>{
//     //     console.log(data)
//     // })
//     TxtFiles.forEach(txt=>{
//     //    console.log(txt) // txt > filename.txt
//         fs.readFile(txt,'utf8',(err,data)=>{
//             console.log(data,txt)
//         })
//     })
// })

// function ReadFiles(ext) {
//     fs.readdir('./', (err, data) => {
//         let TxtFiles = data.filter(file => file.includes(ext)) // list of txt files
//         TxtFiles.forEach(txt => {
//             fs.readFile(txt, 'utf8', (err, data) => {
//                 console.log(data, txt)
//             })
//         })
//     })
// }

// ReadFiles('.java')
// ReadFiles('.doc')
fs.appendFile('./test.txt',
    ', zet dit in de testfile', function(err){
        if(err){
            throw err; }
            console.log("updated")
       
    }
 )
// write File
// fs.writeFile('readme.txt','This is another test.',(err)=>{
//     console.log('File is created')
// })

// fs.writeFile('./public/readme.txt','readme file',(err)=>{
//     console.log('File is created')
//     if(err) throw console.log(err)
// }) dit werkt niet want het kan geen folder creëren 'public'

// append File
// fs.appendFile('readme.txt','Extra string appended',(err)=>{
//     console.log("File is appended")
// })

// fs.appendFile('users.json','5',(err)=>{
//     console.log('file is appended')
// }) users.json heb je zelf gemaakt en je wil 5 toevoegen aan de array=> lukt niet
//=>oplossing:
// fs.readFile('users.json','utf8',(err,data)=>{
//     let users = JSON.parse(data) // from string to array/object
//     console.log(users,"before")
//     users.push(5) // added new value
//     console.log(users,"after")
//     fs.writeFile('users.json',JSON.stringify(users),(err)=>{
//         console.log('file is updated')
//     })
// })

// function isFileExist(filename) {
//     return fs.existsSync(filename)
// }

// function createFile(filename) {
//     fs.writeFile(filename, '[]', () => 'file is created')
// }



// async function AppendDataIntoFile(filename, NewValue) {
//     let isFileFound = await isFileExist(filename)
//     return {
//         isFileFound,
//         filename,
//         NewValue
//     }
// }

// AppendDataIntoFile('posts.json', '0')
//     .then(data => {
//         if(data.isFileFound === false){
//             createFile(data.filename)
//         }else{
//             fs.readFile(data.filename,'utf8',(err,data)=>{
//                 return data
//             })
//         }
//     })
//     .then(data=>{
//         console.log(data)
//     })

// function AppendDataIntoJSONFile(fileName, newData) {
//     fs.readFile(fileName, 'utf8', (err, data) => {
//         if (err) { //als de file nog niet bestaat, wordt er nu eentje gemaakt
//             fs.writeFile(fileName, '[]', (err) => console.log('file is created here'))
//             setTimeout(function () {
//                 AppendDataIntoJSONFile(fileName, newData)
//             }, 3000)
//         }

//         else {
//             let arr = JSON.parse(data) //from string to array
//             arr.push(newData)
//             fs.writeFile(fileName, JSON.stringify(arr), (err) => {
//                 console.log('file is updated')
//             })
//         }
//     })
// }

// AppendDataIntoJSONFile('posts.json',55)

const http = require('http')


const server = http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':'text/html'})
    if(req.url === "/"){
        // read html document
        fs.readFile('index.html','utf8',(err,homepage)=>{
            res.write(homepage)
            res.end()
        })
    }
    else if(req.url === '/login'){
        fs.readFile('login.html','utf8',(err,login)=>{
            res.write(login)
            res.end()
        })
    }
    
})

server.listen(8080,()=>console.log('server is running...'))
// http module
const http = require('http')
const fetch = require('node-fetch')
// create server
http.createServer(function(req,res){
    console.log(req)
    res.writeHead(200,{'Content-Type':'text/html'})
    fetch('https://jsonplaceholder.typicode.com/users/2')
    .then(res=>res.json())
    .then(data=>{
        //als in bashterminal 'curl http://localhost:8080' wordt ingegeven
        //rawHeaders opzoeken in terminal omdat we "console log(req)" doen, 
        //4de item is 'curl'
        if(req.rawHeaders[3].includes('curl')){
            res.write(data.name + " Terminal i see you")
        }else{
            //normaal
            res.write(`<h1>${data.name}</h1>`)
        }
        res.end()
    })
    // res.write(`
    // <h1>Hello Node.js</h1>
    // <script>alert('helooooo')</script>
    // <script>console.log('hello browser console')</script>
    // `)
    
}).listen(8080,()=>{
    console.log('Server is running... Port number is 8080')
}).on('connection',()=>{
    console.log('New connection')
})
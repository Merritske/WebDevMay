// //package.json
// {
//     "name": "fileuploader",
//     "version": "1.0.0",
//     "description": "",
//     "main": "index.js",
//     "scripts": {
//       "start":"node app.js",
//       "dev":"nodemon app.js"
//     },
//     "keywords": [],
//     "author": "",
//     "license": "ISC",
//     "dependencies": {
//       "cors": "^2.8.5",
//       "express": "^4.18.1",
//       "multer": "^1.4.5-lts.1"
//     }
//   }
//package-lock.json
//mapje uploads




// import modules
const express = require('express')
const cors = require("cors")
const multer = require("multer")

// server 
const server = express()

// use middlewares
server.use(cors())
server.use(express.json())
server.use('/uploads',express.static('./uploads'))
// http://localhost:4000/uploads/filename.jpg
server.get('/', (request, response) => {
    response.json({
        message: "Welcome to restful api"
    })
})

app.use(createProxyMiddleware('/api', { 
    target: 'http://newsapi.org/v2',
    changeOrigin: true,
    pathRewrite: {
        '^/api': ''
    },
    secure: true,
 }));

const storage = multer.diskStorage({
    destination: (req, file, cb) => cb(null, './uploads'),
    filename: (req, file, cb) => cb(null, file.originalname)
})

// only image files are allowed in my express application. But what if we change request header for mimetype to manipulate server ?
const uploader = multer({ 
    storage,
    fileFilter:(req,file,callback)=>{
        let arr = ['image/jpeg','image/jpg','image/png','image/gif']
        let extensions = "/jpg|jpeg|png|gif/"
        let isValidImg = arr.filter(img=>img===file.mimetype)
        console.log(extensions.match(file.originalname.split(".")[1]),"testttt")
        console.log(isValidImg.length>0)
        if(isValidImg.length>0 && extensions.match(file.originalname.split(".")[1])!==null){
            callback(null,true)
        }else{
            callback(new Error("Not allowed!!!"))
        }
    }
 })

server.post('/',uploader.single('document'),(request, response) => {
    console.log(request.file.path) // display file location out
    response.json({
        msg: 'ok'
    })
})

// port number for server
server.listen(4000, () => console.log("Server is running on 4000"))
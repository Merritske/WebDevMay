const express = require("express");
const app = express();
const product = require("./api/product");
const root = require('./api/root')
app.use(express.json({ extended: false }));
const {createProxyMiddleware} = require('http-proxy-middleware')

app.use('/api',createProxyMiddleware({
    target:"https://newsapi.org/v2",
    pathRewrite:{['/api']:''}, // http://localhost:4000/news
    changeOrigin:true,
    secure:true
}))

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server is running in port ${PORT}`));
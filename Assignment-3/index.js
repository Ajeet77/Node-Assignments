const http = require('http');
const fs = require('fs');
const name = 'Ajeet'
const content = `<h1>Hello World</h1><p>This is ${name}`
fs.writeFile('index.html', content,()=>{

});
const server = http.createServer((req,res)=>{
    fs.readFile('index.html',(err,data)=>{
        res.writeHead(200,{'content-type':'text/html'})
        res.end(data)
    })
})
server.listen(4040,()=>{
    console.log('Server');
})
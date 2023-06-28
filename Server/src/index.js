var http =require('http');
const PORT = 3001
const fs = require("fs");
const chars = require('./utils/data.js')
http
    .createServer((req, res)=>{
        res.setHeader('Access-Control-Allow-Origin', '*');
        
        if (req.url.includes(`/rickandmorty/character/`)){
            let spl = req.url.split('/')
            let id = spl[3]
            console.log('id: ',id)
            let char = chars.find((ch)=> ch.id === Number(id))
            if (char){
                res.writeHead(200,{'content-type':'application/json'})                
                res.end(JSON.stringify(char))            
            } else {
                res.writeHead(400, {'content-type':'text-`plain'})
                res.end('Character not found')
            }
        }
    }).listen(PORT, 'localhost')
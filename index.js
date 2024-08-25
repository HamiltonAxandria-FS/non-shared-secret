require('dotenv').config();

const secret = process.env.SECRET;
const apiKey = process.env.API_KEY;

if (!apiKey || !secret) {
    console.error('Missing secrets');
}

console.log('Application is running with the provided environment variables.');

const http = require("http");
const hostname = "127.0.0.1"
const port = 3000;

const fs = require("fs")
let directory_name = "./"
let filenames = fs.readdirSync(directory_name)

const server = http.createServer((req,res) => {
    
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");


    f = ""
    filenames.forEach((file)=>{

        f = f +file+" \n"
    })
    res.end(f)
});

server.listen(port, hostname, () => {})
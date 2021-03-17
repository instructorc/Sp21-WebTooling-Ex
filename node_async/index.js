//var fs = require('fs');
const welcome = require('./welcome_functionality/welcome');
const http = require('http');
const fs = require('fs');


var PORT = 3000;

const server = http.createServer((req, res) =>{
    
    //Decision Making Logic
    if(req.url == "/about" && req.method == "GET"){
        res.writeHead(200,  {'Content-Type': 'text/html'});
        fs.readFile("about.html", function(err, data){
            res.write(data);
            res.end();
        })
        
    }else if(req.url == "/contact" && req.method == "GET"){
        res.writeHead(200,  {'Content-Type': 'text/html'});
        fs.readFile("contact.html", function(err, data){
            res.write(data);
            res.end();
        })
    }else if(req.url =="/" && req.method == "GET"){
        res.writeHead(200,  {'Content-Type': 'text/html'});
        fs.readFile("index.html", function(err, data){
            res.write(data);
            res.end();
        })
    }else if(req.url == "/json_api" && req.method == "GET"){
        res.writeHead(200,  {'Content-Type': 'application/json'});
        fs.readFile("./model/datastore.json", function(err, data){
            var fileContents = JSON.parse(data);
            res.write(fileContents.person[0].name);
            res.end();
        })
    }
    else{
        res.writeHead(200,  {'Content-Type': 'text/html'});
        res.write("<h2>404 page</h2>");
        res.end();
    }
}).listen(PORT);

//welcome.welcome();

//welcome.conclude();
/**fs.readFile('subjects.txt', 'utf8', function(err, contents) {
    console.log(contents);
});**/
 
//console.log('after calling readFile');
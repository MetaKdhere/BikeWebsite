const http= require('http');
const fs = require('fs');

const hostname= '127.0.0.1';
const port=3000;
const index = fs.readFileSync('./index.html');
const home= fs.readFileSync('./home.html');
const TestDrive= fs.readFileSync('./TestDrive.html');
const Service= fs.readFileSync('./Services.html');
const Customize = fs.readFileSync('./Customize.html');


const server= http.createServer((req,res)=>{
    console.log(req.url)
    req.statusCode=200;
    url=req.url;
    res.setHeader ('Content-Type','text/html');
    if(url=='/'){
      res.end(index);
    }
    else if(url=='/home'){
      res.end(home);
    }
    else if(url=='/Customize'){
      res.end(Customize);
    }
    else if(url=='/Services'){
      res.end(Service);
    }
    else if(url=='/TestDrive'){
      res.end(TestDrive);
    }
    else{
      res.statusCode = 404;
      res.end("<h1>Your page is form other metaverse</h1>");
    }
});
server.listen(port,hostname, ()=>{
  console.log(`Your server is running at this metaverse server http://${hostname}:${port}/`);
});


server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
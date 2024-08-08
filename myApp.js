let express = require("express");
let app = express();
require('dotenv').config();
console.log("Hello World");
console.log(process.env.MESSAGE_STYLE);
app.use('/public',express.static(__dirname + '/public'));
app.get("/", (req, res) => {
  res.sendFile("./views/index.html", { root: __dirname });
});
app.get("/json", (req, res) => {
  process.env.MESSAGE_STYLE === "uppercase" ? res.json({message: "HELLO JSON"}) : res.json({message: "Hello json"});
});


module.exports = app;let bodyParser=require('body-parser')
let express = require("express");
const req = require("express/lib/request");
var app = express();
require('dotenv').config();

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());
app.use('/',(req,res,next)=>{
  console.log(`${req.method} ${req.path} - ${req.ip}`)
  next();
})
app.use('/public',express.static(__dirname + '/public'));
app.get("/", (req, res) => {
  res.sendFile("./views/index.html", { root: __dirname });
});
app.get("/json", (req, res) => {
  process.env.MESSAGE_STYLE === "uppercase" ? res.json({message: "HELLO JSON"}) : res.json({message: "Hello json"});
});
app.get('/now', (req,res,next)=>{
  let date = new Date().toString();
  req.time = date;
  next();
},(req,res)=>{
  res.json({time: req.time})

})
app.get("/:word/echo", (req, res) => {
  let word = req.params.word
  res.json({echo: word})
});
app.get(`/name`, (req, res) => {
  let firstname = req.query.first
  let lastname = req.query.last
  res.json({ name: `${firstname} ${lastname}`})
});
app.post('/name',(req,res)=>{
  let firstname = req.body.first
  let lastname = req.body.last
  res.json({ name: `${firstname} ${lastname}`})
  
})


module.exports = app;


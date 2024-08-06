let express = require("express");
let app = express();
console.log("Hello World");
app.use('/public',express.static(__dirname + '/public'));
app.get("/", (req, res) => {
  res.sendFile("./views/index.html", { root: __dirname });
});
app.get("/json", (req, res) => {
  res.json({ message: "Hello json" });
  process.env.MESSAGE_STYLE === "uppercase"
    ? { message: "HELLO JSON" }
    : res.json({ message: "Hello json" });
});

module.exports = app;

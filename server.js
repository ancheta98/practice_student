var express = require("express");

var app = express();
var PORT = 3000;

var person = {
  name: "Angel",
  age: 19,
};

//routes

app.get("/name", function(req, res) {
  res.send(person.name);
});

app.get("/age", function(req, res) {
  res.json(person.age);
});

//==========================>

// Listener
// ===========================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});

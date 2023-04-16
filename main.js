const express = require("express");
const app = express();
const port = 3000;
const fs = require("fs");
app.get("/", function (req, res) {
  res.end("Hello world!");
});
app.get("/about", function (req, res) {
  // res.send('<div>Misha Panivnyk</div>')
  if (req.url === "/about") {
    fs.readFile("index.html", (err, data) => {
      if (err) {
        res.writeHead(404);
        res.write("File not found!");
      } else {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write(data);
      }
      res.end(data);
    });
  } else {
    res.writeHead(404);
    res.write("Pages not found!");
    res.end();
  }
});

app.listen(port, function () {
  console.log("running");
});
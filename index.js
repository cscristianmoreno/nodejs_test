const express = require("express");

const app = express();

const port = proccess.env.PORT || 4000;

app.listen(port);
console.log(`El puerto es ${port}`);
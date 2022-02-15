const express = require("express");
const routing = require("./src/routes.js");

const app = express();

const port = process.env.PORT || 4000;

app.listen(port, () => {
    console.log("Se conectó");
})

app.use(routing);
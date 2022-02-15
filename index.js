const express = require("express");

const app = express();

const port = process.env.PORT || 4000;

app.listen(port, () => {
    console.log("Se conectó");
})

app.get("/", (req, res, next) => {

    res.send("<h1>test</h1>");
})
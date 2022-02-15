const { Router } = require("express");
const express = require("express");

const app = express();

const port = proccess.env.PORT || 4000;

app.get("/", (req, res, next) => {
    <h1>El puerto es `${port}`</h1>
})
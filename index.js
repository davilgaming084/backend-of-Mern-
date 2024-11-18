// importing .env
require("dotenv").config()
const express = require("express") // its besicly importing 
// import express from "express" // 1 line is like this simple  importing
const app = express()
const port = 4000 // making port for listining continue-ssily



app.get("/", (req, resp) => {
    resp.send("hello world ")
})

app.get("/twitter", (req, res) => {
    res.send("twiter satish")
})

app.get("/login", (req, res) => {
    // res.send(" heloo welcome to log in ")
    res.send("<h1> heloo welcome to log in yo </h1>")
})

app.get("/youtube", (req, res) => {
    res.send("<h1> evil night edit </h1>")
})
app.listen(process.env.PORT, () => {
    console.log("listning on ", port);

})
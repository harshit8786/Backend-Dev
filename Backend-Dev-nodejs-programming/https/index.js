// import http from "http"
// let port = 8080
// let server = http.createServer((req, res)=>{
//     res.end("<h1> home </h1>")
// })
// server.listen(port, ()=>{
//     console.log("connect")
// })
import express from "express"
let port = 8080;
let app = express();

app.use(express.json())
app.get("/", (req, res)=>{
    res.send(" home ")
})
app.post("/home", (req, res)=>{
    let{id,name} =req.body
    console.log(id,name);
    res.send(`${id} and ${name}`)
})

app.listen(port, ()=>{
    console.log("connect")
})
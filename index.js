const cookieParser = require("cookie-parser")
const express=require("express")
const app=express()

app.use(cookieParser())

app.get("/getcookies",(req,res)=>{
    res.cookie("greeet","hello")
    res.cookie("madein","India")
    res.cookie("name","supriyo")
    res.send("send u cookie!")
})

app.get("/greet",(req,res)=>{
    let {name="anonymous"} = req.cookies;
    res.send(`hi, ${name}`)
})

app.get("/",(req,res)=>{
    console.dir(req.cookies)
    res.send("Hi ,I am root")
})

app.listen(3000,()=>{
    console.log("server running at port 3000")
})
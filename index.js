const cookieParser = require("cookie-parser");
const express = require("express");
const app = express();

app.use(cookieParser("SecretKey")); 

app.get("/getcookies", (req, res) => {
    res.cookie("greeet", "hello", { signed: true });
    res.cookie("madein", "India", { signed: true });
    res.cookie("name", "supriyo", { signed: true });
    res.send("Sent you signed cookies!");
});

app.get("/greet", (req, res) => {
    let { name = "anonymous" } = req.signedCookies;
    res.send(`Hi, ${name}`);
});

app.get("/", (req, res) => {
    console.log("Signed Cookies:", req.signedCookies);
    console.log("Unsigned Cookies:", req.cookies);
    res.send("Hi, I am root");
});

app.listen(3000, () => {
    console.log("Server running at port 3000");
});

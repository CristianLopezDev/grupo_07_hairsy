const express = require("express");
const app = express();
const path = require("path");

const publicFolderPath = path.resolve(__dirname, "./public");
app.use (express.static(publicFolderPath));

app.use("/public", express.static("public"));

app.get("/", (req,res) =>{
    res.sendFile(path.join(__dirname, "views/home.html"))
});

app.get("/login", (req,res) =>{
    res.sendFile(path.join(__dirname, "views/login.html"))
});

app.get("/register", (req,res) =>{
    res.sendFile(path.join(__dirname, "views/register.html"))
});

app.get("/product", (req,res) =>{
    res.sendFile(path.join(__dirname, "views/product.html"))
});

app.get("/cart", (req,res) =>{
    res.sendFile(path.join(__dirname, "views/cart.html"))
});

app.listen(3000,(req,res) =>{
    console.log("Servidor corriendo en http://localhost:3000")
})


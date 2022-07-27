const express = require("express");

const app = express();

const path = require("path");

const mainRouter = require("./src/routers/mainRouter")

/*app.set('view engine','ejs')
app.set('views', path.join(__dirname, '/views'))

app.use(express.static('public'));
app.use('/',mainRouter)*/






const publicFolderPath = path.resolve(__dirname, "./public");
app.use (express.static(publicFolderPath));

app.use("/public", express.static("public"));

app.get("/", (req,res) =>{
    res.sendFile(path.join(__dirname, "/src/views/home.html"))
});

app.get("/login", (req,res) =>{
    res.sendFile(path.join(__dirname, "/src/views/login.html"))
});

app.get("/register", (req,res) =>{
    res.sendFile(path.join(__dirname, "/src/views/register.html"))
});

app.get("/product", (req,res) =>{
    res.sendFile(path.join(__dirname, "/src/views/product.html"))
});

app.get("/cart", (req,res) =>{
    res.sendFile(path.join(__dirname, "/src/views/cart.html"))
});

app.listen(3000,(req,res) =>{
    console.log("Servidor corriendo en http://localhost:3000")
})


const express = require("express");

const app = express();

const path = require("path");

const mainRouter = require("./src/routers/mainRouter")

app.set('view engine','ejs')

app.set('views', path.join(__dirname, '/src/views'))

app.use(express.static('public'));







/*const publicFolderPath = path.resolve(__dirname, "./public");
app.use (express.static(publicFolderPath));*/

app.use("/public", express.static("public"));
app.use('/',mainRouter)

app.listen(3000,(req,res) =>{
    console.log("Servidor corriendo en http://localhost:3000")
})


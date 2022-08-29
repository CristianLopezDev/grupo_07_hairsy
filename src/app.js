const express = require("express");
const app = express();
const path = require("path");
const mainRouter = require("./routes/mainRouter")
const productRouter = require('./routes/productRouter');
const userRouter = require('./routes/userRouter');
const methodOverride = require('method-override');
const { rmSync } = require("fs");
const session = require('express-session');



app.use(methodOverride('_method'));

app.set('view engine','ejs')

app.set('views', path.join(__dirname, '/views'))

app.use(express.static('public'));

app.use("/public", express.static("public"));

app.use('/',mainRouter)

app.use('/product', productRouter);

app.use('/user', userRouter);

app.use(session( {secret: "Nuestro mensaje secreto"}));

//Capturo información de formulario en forma de obj literal
app.use(express.urlencoded({ extended: false}));
app.use(express.json());

app.use((req, res, next) => {
    res.status(404).render('not-found');
})

app.listen(3000,(req,res) =>{
    console.log("Servidor corriendo en http://localhost:3000")
})

module.exports = app;





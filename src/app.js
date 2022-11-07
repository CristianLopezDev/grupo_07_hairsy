const express = require("express");
const path = require("path"); 
const methodOverride = require('method-override');
const session = require('express-session');
const app = express();

/*****************ROUTERS************************/
const mainRouter = require("./routes/mainRouter")
const productRouter = require('./routes/productRouter');
const userRouter = require('./routes/userRouter');
/******************MIDDLEWARE*********************/
const userLoggedMiddleware = require("./middlewares/userLoggedMiddleware")
/*****************SESSION************************/
app.use(session( {
    secret: "Nuestro mensaje secreto",
    resave: false,
    saveUninitialized: false,
    
}));

app.use(userLoggedMiddleware);
/**************EDIT DELETE*****************/
app.use(methodOverride('_method'));

/****************VIEWS*************************/
app.set('view engine','ejs')

app.set('views', path.join(__dirname, '/views'))

/*****************STYLES***************************/
app.use(express.static('public'));
app.use("/public", express.static("public"));

/************FORMS DATA******************/
app.use(express.urlencoded({ extended: true}));
app.use(express.json());

/***************ROUTING*******************/
app.use('/',mainRouter)
app.use('/product', productRouter);
app.use('/user', userRouter);

/****************404**********************/
app.use((req, res, next) => {
    res.status(404).render('not-found');
})

app.listen(3000,(req,res) =>{
    console.log("Servidor corriendo en http://localhost:3000")
})

module.exports = app;






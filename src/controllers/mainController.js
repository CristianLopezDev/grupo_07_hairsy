const product = [{
    title:"",
    description:"",
    price:"",
    id:"",

},
{

},
];

const controller = {

    home:  (req, res) => {

        res.render('home')
    },
    product: (req, res) => {
        const products = products.find((product) => product.id == req.params.id )
        res.render('product')
    },
    
    cart: (req, res) => {
        res.render('cart')
    },
    
    login: (req, res) => {
        res.render('login')
    },
    
    register: (req, res) =>{
        res.render('register')
    }

}


module.exports = controller



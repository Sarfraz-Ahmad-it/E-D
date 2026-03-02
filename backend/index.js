const express = require('express');
require("./db/config");
const User = require("./db/User");
const Product = require("./db/product")
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json());
app.post("/register", async (req, res)=>{
    let user = new User(req.body);
    let result = await user.save();
    result = result.toObject();
    delete result.password;
    res.send(result);
})

app.post("/login", async(req, res)=>{
    
    console.log(req.body);
    if(req.body.password && req.body.email){
        let user = await User.findOne(req.body).select('-password');
    if(user)
    {
        res.send(user);
    }
    }
    else
    {
        res.send({result:"Not user found"});
    }    
})

app.post("/add-product", async(req, res)=>{
    let product = new Product(req.body);
    let result = await product.save();
    res.send(result);
})

app.get('/products', async (req, res)=>{
    let products = await  Product.find(req.body);
    if(products.length>0){
        res.send(products);
    }else{
        res.send({result: "No found products"});
    }
    
    
})

app.delete('/product/:id', async (req,res)=>{
    
    const result = await Product.deleteOne({_id:req.params.id})
    res.send(result);

})

app.listen(4500,()=>{
    console.log("server running on 45000 port");
});
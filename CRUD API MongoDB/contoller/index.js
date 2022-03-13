const express = require('express');
require("../model/config");
const Product = require('../model/product');
const app = express();
var bodyParser = require('body-parser')

app.use(bodyParser.json());
app.post("/", async (req, resp) => {
    let data = new Product(req.body);
    const result = await data.save();
    resp.send(result);
});

app.get("/", async (req, resp) => {
    let data = await Product.find();
    resp.send(data);
})

app.delete("/", async (req, resp) => {
    console.log(req.params)
    let data = await Product.deleteOne(req.params);
    resp.send(data);
})


app.put("/",async (req, resp) => {
    console.log(req.params)
    let data = await Product.updateOne(
        req.params,
        {$set: req.body}
    );
    resp.send(data);
})

app.listen(3000,() =>{
    console.log("server.....")
})
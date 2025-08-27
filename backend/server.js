import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';
import Product from './models/product.model.js';

dotenv.config();
const app = express();

app.use(express.json()); //allows us to accept JSON data in the req.body 




//POST request to create a product
app.post('/api/products', async (req, res) => {
    const product = req.body; // user will send this data

    if(!product.name || !product.price || !product.image){
        return res.status(400).json({success:false,message: "Please provide all fields"});
    }

    const newProduct = new Product(product); //this is object of the product.model.js

    try{
        await newProduct.save();
        res.status(201).json({success: true, data: newProduct})
    } catch(error) {
        console.error("error in creating product:", error.message);
        res.status(500).json({success: false,message: "server error"});
    }
});





//DELETE request to delete a product
app.delete('/api/products/:id', async (req, res) => {
    const {id} = req.params;
    
    try{
        await Product.findByIdAndDelete(id);
        res.status(200).json({success: true, message: "Product deleted successfully"});
    }
    catch(error) {
        res.status(404).json({success: false,message: "product not found"});
    }
});






app.listen(5000, () => {
    connectDB();
    console.log('Server is running on port 5000 link http://localhost:5000');
})

import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    image: {
        type: String,
        required: true
    }
},{
    timestamps: true // createdAt, updatedAt
});

const Product = mongoose.model('Product',productSchema);
//                              write this in singular Product mongodb will change it to products

export default Product;
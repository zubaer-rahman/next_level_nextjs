import mongoose from "mongoose";

const product = new mongoose.Schema({
    name : String,
    price : Number,
    category: String
});

mongoose.models = {};

export const Product = mongoose.model("Product", product);
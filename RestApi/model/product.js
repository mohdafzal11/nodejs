const mongoose = require('mongoose');
const { Schema } = mongoose;
// database connection
main().catch(err=>console.log(err));
async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/ecommerce");
    console.log("database connected")
}


// Schema for products
const productSchema = new Schema({
    title:{type:String,required:true},  //String is shorthand for {type:string}
    description: String,
    price:Number,
    discountPercentage:Number,
    rating:{type:Number ,min:0 ['wrong rating'], max:5},
    brand:{type:String,required:true},
    category:{type:String,required:true},
    thumbnail:{type:String,required:true},
    images:[String]
})

exports.Product=mongoose.model("Product",productSchema);
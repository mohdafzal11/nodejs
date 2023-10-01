const fs=require('fs');
const model=require("../model/product")
const Product=model.Product;
const ejs=require("ejs")
// const path=require("path")

exports.getAllProductsSSR=async (req,res)=>{
    const products=await Product.find();
    ejs.renderFile("./pages/index.ejs",{products:products}
    ,(err,str)=>{
        if (err) {
            console.error(err);
          } else {
            res.send(str);
          }
        });
}

exports.createProduct=(req,res)=>{
    const product=new Product(req.body);
    
    // product.save((err,doc)=>{
    //     console.log({err,doc})
    // })
    
    product.save()
      .then((doc) => {
          console.log('Post saved successfully');
          res.status(201).json(doc)
       })
       .catch((err) => {
           console.error(err);
          });


   }

exports.getAllProducts= async (req,res)=>{
    const products= await Product.find();
    res.json(products);
 }

 exports.getProduct= async (req,res)=>{
    const id=req.params.id;
    const product= await Product.findById(id);
    res.json(product);
}

exports.replaceProduct=async(req,res)=>{
    const id=req.params.id;
    const newProduct=await Product.findOneAndReplace({_id:id},req.body)
    res.status(201).json(newProduct)
}
exports.updateProduct= async (req,res)=>{
    const id=req.params.id;
    const newProduct=await Product.findOneAndUpdate({_id:id},req.body,{new:true})
    res.status(201).json(newProduct)

}

exports.deleteProduct=async (req,res)=>{
    const id=req.params.id;
    const product=await Product.findOneAndDelete({_id:id},)
    res.status(201).json(product)
}
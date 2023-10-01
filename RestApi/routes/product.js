const express=require('express');
const productController=require("../controller/product")


const router=express.Router();


 //CREATE API i used to push data in to the database and alwasys get the data from the user 

router.post('/',productController.createProduct) 

.get('/ssr' , productController.getAllProductsSSR)


// GET   REQUEST for whole data
.get('/', productController.getAllProducts)

// GET Request for a specific data
.get('/:id',productController.getProduct)

//PUT requet is used top update the data in the database and it overwrites the old data
.put('/:id',productController.replaceProduct)

//POST requet is used top update the data in the database and does not overwrites the old data 
.patch('/:id',productController.updateProduct)
 
// DELETE REQUEST is used to delete the data form the database
.delete('/:id',productController.deleteProduct);




exports.router=router;
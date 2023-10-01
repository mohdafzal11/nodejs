const express=require('express');
const userController=require("../controller/user")


const router=express.Router();


 //CREATE API i used to push data in to the database and alwasys get the data from the user 
router.post('/',userController.createProduct) 

 
// GET   REQUEST for whole data
.get('/', userController.getAllProducts)

// GET Request for a specific data
.get('/:id',userController.getProduct)

//PUT requet is used top update the data in the database and it overwrites the old data
.put('/:id',userController.replaceProduct)

//POST requet is used top update the data in the database and does not overwrites the old data 
.patch('/:id',userController.updateProduct)
 
// DELETE REQUEST is used to delete the data form the database
.delete('/:id',userController.deleteProduct);


exports.router=router;
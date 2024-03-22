const  response  = require('../../app');
const Product = require('../models/productmodels');

// Create a new product
exports.createProduct = async (req, res) => {
    try {
        const { name, amount, quantity } = req.body;
        const product = new Product({ name, amount, quantity });
        await product.save();
        res.status(201).json({ success: true, data: product });
    } catch (err) {
        res.status(500).json({ success: false, error: err.message });
    }
};

//get all product 
exports.getProduct = async (req, res) => {
         const product = await Product.find();
         res.send(product);
};

//Update the product
exports.updateProduct = async (req, res) => {
    
  
    try {
        const { id } = req.params;
     const { name, amount, quantity } = req.body;
        const product = await Product.findByIdAndUpdate(id, { name, amount, quantity }, { new: true });
     
         if (!product) {
           return res.status(404).json({ message: "Product not found" });
         }
     
         res.status(200).json({ message: "Product updated", product });
       } catch (err) {
        res.status(500).json({ message: err.message });
      }
  };
  // delete product 

  
  exports.deleteProduct = async (req, res) => {
    try {
        const product = await Product.findByIdAndDelete(req.params.id);
        if (!product) {
            return res.status(404).json({ message: 'product not found' });
        }
        res.status(204).json({ message: 'product deleted' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
   
};

//Amount And quanity 
exports.updateAmount = async (req, res) => { try {
    const updatedProduct = await Product.findByIdAndUpdate(req.params.id, { amount: req.body.amount }, { new: true });
    if (!updatedProduct) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.status(200).json({ message: 'Amount updated', updatedProduct });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//quantity

exports.updateQuanity =async(req,res) =>{
    try {
        const updatedProduct = await Product.findByIdAndUpdate(req.params.id, {
          quantity: req.body.quantity || 1 // Set the default value to 1
        }, { new: true });
        if (!updatedProduct) {
          return res.status(404).json({ message: 'Product not found' });
        }
        res.status(200).json({ message: 'Quantity updated', updatedProduct });
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
    };

//find by category

exports.getProductsByCategory = async (req, res) => {
    try {
        const category = req.params.category;
        const products = await Product.find({ category: category });
        if (products.length === 0) {
            return res.status(404).json({ message: 'No products found in this category' });
        }
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};











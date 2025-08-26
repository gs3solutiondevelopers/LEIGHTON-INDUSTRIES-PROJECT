// src/controllers/superadmin.controller.js

import { Product } from '../models/product.model.js';
import { Dealer } from '../models/dealer.model.js';

const addproduct = async (req, res) => {
  try {
    const { name, description, specifications, features, category } = req.body;
    
    // Check if files were uploaded
    if (!req.files || !req.files.heroImage || !req.files.galleryImages) {
      return res.status(400).json({ message: "Both hero and gallery images are required." });
    }

    const heroImagePath = req.files.heroImage[0].path;
    const galleryImagePaths = req.files.galleryImages.map(file => file.path);

    const parsedSpecifications = JSON.parse(specifications);
    const parsedFeatures = JSON.parse(features);

    const newProduct = await Product.create({
      name,
      description,
      category,
      specifications: parsedSpecifications,
      features: parsedFeatures,
      heroImage: heroImagePath,
      galleryImages: galleryImagePaths
    });

    res.status(201).json({ success: true, message: "Product added successfully.", data: newProduct });
  } catch (error) {
    console.error("Add Product Error:", error);
    res.status(500).json({ success: false, message: "Failed to add product." });
  }
};

const addDealer = async (req, res) => {
  try {
    const { name, address, pinCode, contactNo, location } = req.body;
    const newDealer = await Dealer.create({ name, address, pinCode, contactNo, location });
    res.status(201).json({ success: true, message: "Dealer added successfully.", data: newDealer });
  } catch (error) {
    console.error("Add Dealer Error:", error);
    res.status(500).json({ success: false, message: "Failed to add dealer." });
  }
};
const deleteDealer = async (req, res) => {
  try {
    const { id } = req.params; // Get the dealer ID from the URL
    const dealer = await Dealer.findByIdAndDelete(id);

    if (!dealer) {
      return res.status(404).json({ success: false, message: "Dealer not found." });
    }

    res.status(200).json({ success: true, message: "Dealer deleted successfully." });
  } catch (error) {
    console.error("Delete Dealer Error:", error);
    res.status(500).json({ success: false, message: "Failed to delete dealer." });
  }
};

const deleteProduct = async (req,res)=>{
  try {
    const {id} = req.params;
    const product = await Product.findByIdAndDelete(id);
    if (!product) {
      return res.status(404).json({success:false,message:"Product not found"});
    }
        res.status(200).json({ success: true, message: "Product deleted successfully." });

  } catch (error) {
    console.error("Delete Product Error",error);
    res.status(500).json({success:false,message:"failed to delete product"});
  }
}

export { addproduct , addDealer,deleteDealer,deleteProduct };

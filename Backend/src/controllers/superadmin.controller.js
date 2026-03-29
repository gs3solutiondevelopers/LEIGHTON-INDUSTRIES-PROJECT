// src/controllers/superadmin.controller.js

import { Product } from '../models/product.model.js';
import { Dealer } from '../models/dealer.model.js';

const addproduct = async (req, res) => {
    try {
        const { name, description, category, specifications, features } = req.body;
        
        if (!req.files || !req.files.heroImage) {
            return res.status(400).json({ message: "Product hero image is required." });
        }

        const heroImagePath = req.files.heroImage[0].path;
        const galleryImagePaths = req.files.galleryImages ? req.files.galleryImages.map(file => file.path) : [];

        // Safely parse JSON strings
        const parsedSpecifications = typeof specifications === 'string' ? JSON.parse(specifications) : specifications;
        const parsedFeatures = typeof features === 'string' ? JSON.parse(features) : features;

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

const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findByIdAndDelete(id);
    if (!product) {
      return res.status(404).json({ success: false, message: "Product not found" });
    }
    res.status(200).json({ success: true, message: "Product deleted successfully." });

  } catch (error) {
    console.error("Delete Product Error", error);
    res.status(500).json({ success: false, message: "failed to delete product" });
  }
}

const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, description, category, specifications, features } = req.body;

    // Safely parse JSON strings to prevent errors
    const safeParse = (str) => {
      if (typeof str !== 'string' || str === "[object Object]") return str;
      try {
        return JSON.parse(str);
      } catch (e) {
        return str; // Return original string if parsing fails
      }
    };

    const parsedSpecifications = safeParse(specifications);
    const parsedFeatures = safeParse(features);

    let updateData = {
      name,
      description,
      category,
      specifications: parsedSpecifications,
      features: parsedFeatures,
    };

    // Handle new image uploads
    if (req.files) {
      if (req.files.heroImage) {
        updateData.heroImage = req.files.heroImage[0].path;
      }
      if (req.files.galleryImages) {
        updateData.galleryImages = req.files.galleryImages.map(file => file.path);
      }
    }

    const updatedProduct = await Product.findByIdAndUpdate(id, updateData, { new: true });

    if (!updatedProduct) {
      return res.status(404).json({ success: false, message: "Product not found." });
    }

    res.status(200).json({ success: true, message: "Product updated successfully.", data: updatedProduct });
  } catch (error) {
    console.error("Update Product Error:", error);
    res.status(500).json({ success: false, message: "Failed to update product." });
  }
};
const updateDealer = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, address, pinCode, contactNo, location } = req.body;

    const updatedDealer = await Dealer.findByIdAndUpdate(id, { name, address, pinCode, contactNo, location }, { new: true });

    if (!updatedDealer) {
      return res.status(404).json({ success: false, message: "Dealer not found." });
    }

    res.status(200).json({ success: true, message: "Dealer updated successfully.", data: updatedDealer });
  } catch (error) {
    console.error("Update Dealer Error:", error);
    res.status(500).json({ success: false, message: "Failed to update dealer." });
  }
};

export { addproduct, addDealer, deleteDealer, deleteProduct, updateDealer, updateProduct };

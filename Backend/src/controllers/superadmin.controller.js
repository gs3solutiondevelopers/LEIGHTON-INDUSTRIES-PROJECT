// src/controllers/superadmin.controller.js

import { Product } from '../models/product.model.js';
import { Dealer } from '../models/dealer.model.js';

const addproduct = async (req, res) => {
  try {
    const { name, description, specifications, features, category } = req.body;
    
    if (!req.file) {
      return res.status(400).json({ message: "Product image is required." });
    }

    const imagePath = req.file.path;

    // --- THIS IS THE FIX ---
    // Safely parse the JSON strings, providing default values if they are empty.
    let parsedSpecifications = {};
    if (specifications) {
      try {
        parsedSpecifications = JSON.parse(specifications);
      } catch (e) {
        return res.status(400).json({ message: "Invalid specifications format." });
      }
    }

    let parsedFeatures = [];
    if (features) {
      try {
        parsedFeatures = JSON.parse(features);
      } catch (e) {
        return res.status(400).json({ message: "Invalid features format." });
      }
    }
    // --------------------

    const newProduct = await Product.create({
      name,
      description,
      category,
      specifications: {
          capacity: parsedSpecifications.capacity || '',
          warranty: parsedSpecifications.warranty || '',
          type: parsedSpecifications.type || ''
      },
      features: parsedFeatures,
      imagePath: imagePath
    });

    res.status(201).json({ success: true, message: "Product added successfully.", data: newProduct });
  } catch (error) {
    console.error("Add Product Error:", error);
    // Provide a more specific error message if validation fails
    if (error.name === 'ValidationError') {
      return res.status(400).json({ success: false, message: "Product validation failed.", details: error.errors });
    }
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

export { addproduct , addDealer,deleteDealer };

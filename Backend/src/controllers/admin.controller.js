// src/controllers/admin.controller.js

import { User } from '../models/user.model.js';
import jwt from 'jsonwebtoken';
import { Contact } from '../models/contact.model.js';
import { Warranty } from '../models/warranty.model.js';
import { Complaint } from '../models/complaint.model.js';
import { Dealer } from '../models/dealer.model.js';
const loginAdmin = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: "Email and password are required." });
  }

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "Admin user not found." });
    }

    const isPasswordCorrect = await user.isPasswordCorrect(password);
    if (!isPasswordCorrect) {
      return res.status(401).json({ message: "Invalid credentials." });
    }

    const token = jwt.sign(
      { _id: user._id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: '1d' }
    );

    // Simplified response: only send the token in the JSON body
    return res.status(200).json({
      success: true,
      token,
      user: { email: user.email, role: user.role },
      message: "Login successful",
    });

  } catch (error) {
    console.error("Login Error:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

const logoutAdmin = (req, res) => {
  // This endpoint is for stateless logout. It simply acknowledges the request.
  return res.status(200).json({ success: true, message: "Logout acknowledged" });
}

const getContacts = async (req, res) => {
  try {
    const contacts = await Contact.find({}).sort({ createdAt: -1 });
    res.status(200).json(contacts);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch contact messages." });

  }
}

const getComplaints = async (req, res) => {
  try {
    const complaints = await Complaint.find({}).sort({ createdAt: -1 });
    res.status(200).json(complaints);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch complaints." });
  }
};

const getWarranties = async (req, res) => {
  try {
    const warranties = await Warranty.find({}).sort({ createdAt: -1 });
    res.status(200).json(warranties);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch warranty claims." });
  }
};
const getDealers = async (req, res) => {
  try {
    const dealers = await Dealer.find({}).sort({ createdAt: -1 });
    res.status(200).json(dealers);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch dealers." });
  }
};

export { loginAdmin, logoutAdmin, getComplaints, getContacts, getWarranties, getDealers };

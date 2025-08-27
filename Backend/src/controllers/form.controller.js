import { Contact } from "../models/contact.model.js";
import { Complaint } from "../models/complaint.model.js";
import { Warranty } from "../models/warranty.model.js";
const submitContact = async (req, res) => {
    try {
        const { name, email, message } = req.body;
        if (!name || !email || !message) {
            return res.status(400).json({ succes: false, message: "All fields are required" })
        }

        const newContact = await Contact.create({ name, email, message });

        return res.status(201).json({
            success: true,
            message: "Contact form submitted Successfully",
            data: newContact
        })
    } catch (error) {
        console.error("Contact form submission error:", error);
        return res.status(500).json({ success: false, message: "Failed to submit contact form" })
    }
}

const submitComplaint = async (req, res) => {
    try {
        const { name, phone, productModel, complaint } = req.body;
        const newComplaint = await Complaint.create({ name, phone, productModel, complaint })
        res.status(201).json({ success: true, message: "Complaint submitted successfully.", data: newComplaint });

    } catch (error) {
        res.status(500).json({ success: false, message: "Failed to submit complaint." });

    }
}

const submitWarranty = async (req, res) => {
    try {
        const { name, phone, serialNumber, purchaseDate, issue } = req.body;
        const newWarranty = await Warranty.create({ name, phone, serialNumber, purchaseDate, issue })
        res.status(201).json({ success: true, message: "Warranty claim submitted successfully.", data: newWarranty });


    } catch (error) {
        res.status(500).json({ success: false, message: "Failed to submit warranty claim." });

    }
}

export { submitContact, submitComplaint, submitWarranty }
import { Dealer } from "../models/dealer.model.js";
const getAllDealers = async (req, res) => {
    try {
        const dealers = await Dealer.find({});
        res.status(200).json({ success: true, data: dealers });
    } catch (error) {
        res.status(500).json({ success: false, message: "Failed to fetch dealers." });

    }
}
export {getAllDealers}
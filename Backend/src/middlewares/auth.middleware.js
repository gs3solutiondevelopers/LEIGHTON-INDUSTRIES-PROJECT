// src/middlewares/auth.middleware.js

import jwt from 'jsonwebtoken';
import { User } from '../models/user.model.js';

export const verifyJWT = async (req, res, next) => {
    try {
        // Get the token from the request headers
        const token = req.headers.authorization?.split(' ')[1]; // Format: "Bearer TOKEN"

        if (!token) {
            return res.status(401).json({ message: 'No token provided, authorization denied.' });
        }

        // Verify the token using the secret key
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        // Find the user based on the ID from the token
        const user = await User.findById(decoded?._id).select("-password");

        if (!user) {
            return res.status(401).json({ message: 'Invalid token.' });
        }

        // Attach the user object to the request for later use
        req.user = user;
        next(); // Proceed to the next function (the controller)

    } catch (error) {
        console.error("Authentication error:", error.message);
        return res.status(401).json({ message: 'Token is not valid.' });
    }
};

// src/middlewares/auth.middleware.js

import jwt from 'jsonwebtoken';
import { User } from '../models/user.model.js';

export const verifyJWT = async (req, res, next) => {
    try {
        const token = req.headers.authorization?.split(' ')[1]; 
        if (!token) {
            return res.status(401).json({ message: 'No token provided, authorization denied.' });
        }


        const decoded = jwt.verify(token, process.env.JWT_SECRET);


        const user = await User.findById(decoded?._id).select("-password");

        if (!user) {
            return res.status(401).json({ message: 'Invalid token.' });
        }

        
        req.user = user;
        next(); 

    } catch (error) {
        console.error("Authentication error:", error.message);
        return res.status(401).json({ message: 'Token is not valid.' });
    }
};
export const verifySuperAdmin = (req, res, next) => {
  
  if (req.user && req.user.role === 'SUPER_ADMIN') {
    next(); 
  } else {
    res.status(403).json({ message: "Access denied. Requires Super Admin role." });
  }
};
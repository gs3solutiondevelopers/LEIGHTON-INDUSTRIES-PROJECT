// src/seed.js

import mongoose from 'mongoose';
import dotenv from 'dotenv';
import connectDB from './db/db.js';
import { User } from './models/user.model.js';

dotenv.config({
    path: './.env'
});

const seedUsers = async () => {
    await connectDB();

    try {
        // Check if users already exist
        const adminExists = await User.findOne({ email: 'admin@leighton.com' });
        const superAdminExists = await User.findOne({ email: 'superadmin@leighton.com' });

        if (adminExists && superAdminExists) {
            console.log('Admin and Super Admin users already exist. No action taken.');
            return;
        }

        // Create users if they don't exist
        const usersToCreate = [];
        if (!adminExists) {
            usersToCreate.push({
                email: 'admin@leighton.com',
                password: 'leighton123',
                role: 'ADMIN'
            });
        }
        if (!superAdminExists) {
            usersToCreate.push({
                email: 'superadmin@leighton.com',
                password: '123456',
                role: 'SUPER_ADMIN'
            });
        }

        if (usersToCreate.length > 0) {
            await User.insertMany(usersToCreate);
            console.log('Successfully created initial admin users!');
        }

    } catch (error) {
        console.error('Error seeding database:', error);
    } finally {
        mongoose.connection.close();
    }
};

seedUsers();

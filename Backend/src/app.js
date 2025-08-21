import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"

const app = express();

app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}))

app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(cookieParser());

// --- Routes ---
// Corrected the import paths and variable names
import adminRouter from './routes/admin.route.js';
import formRouter from './routes/form.route.js';

// --- Route Declaration ---
app.use('/api/v1/admin', adminRouter);
app.use('/api/v1/forms', formRouter);

export { app };

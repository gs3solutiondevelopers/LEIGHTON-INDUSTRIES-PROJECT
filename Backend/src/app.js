import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"

const app = express();

app.use(cors({
  origin: [ 'http://localhost:5173','https://leighton-industries-project-1-xhkn.onrender.com' ],
  credentials: true
}));

app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(cookieParser());
app.use(express.static("public"));
// --- Routes ---
// Corrected the import paths and variable names
import adminRouter from './routes/admin.route.js';
import formRouter from './routes/form.route.js';
import SuperAdminRouter from './routes/superadmin.route.js'
import productRouter from './routes/product.route.js'
import dealerRouter from './routes/dealer.route.js'; // 1. Import new router


// --- Route Declaration ---
app.use('/api/v1/admin', adminRouter);
app.use('/api/v1/forms', formRouter);
app.use('/api/v1/super-admin',SuperAdminRouter)
app.use('/api/v1/products', productRouter); 
app.use('/api/v1/dealers',dealerRouter)
export { app };

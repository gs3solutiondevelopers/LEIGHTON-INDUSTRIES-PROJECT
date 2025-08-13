import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"

const app = express();
app.use(cookieParser());
import dotenv from "dotenv"

dotenv.config({
    path: "./.env",
})

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));

export { app };

app.get("/", (req, res) => {
    res.send("Hello Battery")
})
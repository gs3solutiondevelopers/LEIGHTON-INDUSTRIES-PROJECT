import connectDB from "./db/db.js";
import { app } from "./app.js";
import dotenv from "dotenv"
dotenv.config({
    path: './.env'
});

connectDB().then(() => {
    app.listen(process.env.PORT || 4400, () => {
        console.log(`listening on http://localhost:${process.env.PORT}`)
    })
})
    .catch((err) => {
        console.log("Connection Failed to database", err)
    })
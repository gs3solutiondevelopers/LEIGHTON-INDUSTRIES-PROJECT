import mongoose from 'mongoose'

export const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGO_URI}`)
        console.log(`Coonected to MONGODB: ${connectionInstance.connection.host}`)
    } catch (error) {
        console.log("MONGODB Connection Error", error)
        process.exit(1);
    }
}

export default connectDB;
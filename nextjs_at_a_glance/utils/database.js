import mongoose from "mongoose";

export const connectDB = async () => {
    try{
        // const {connection} = await mongoose.connect("mongodb://localhost:27017"); // mongodb local
        const {connection} = await mongoose.connect(`mongodb+srv://nextuser:${process.env.PASSWORD}@${process.env.DOMAIN}/?retryWrites=true`, {dbName: "NextJsPrac"}); //mongodb atlas
        console.log(`Database connected on ${connection.host}`);
    } catch (err) {
        console.log(`Error`, err);
    }
}
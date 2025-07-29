import mongoose from "mongoose";

export async function connectDB(){
    try {
       await mongoose.connect(process.env.MONGO_URL);
       console.log("connected to MONGO_DB")
    } catch (err){
        console.error(err);
        process.exit(1);
    }
}
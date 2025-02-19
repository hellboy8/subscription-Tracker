import mongoose from "mongoose";
import { DB_URI,NODE_ENV } from "../config/env.js";

if(!DB_URI){
    console.error("MongoDB URI is required");
    process.exit(1);
}

const connectDB = async() =>{
    try {
        await mongoose.connect(DB_URI);
        console.log('Database connected successfully');
        
    } catch (error) {
        console.error('Error conncecting to Database',error);
        process.exit(1);
        
    }

}

export default connectDB;
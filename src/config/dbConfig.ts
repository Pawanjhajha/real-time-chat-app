//mongoose is third party libary that use to connect the mongodb
import mongoose from "mongoose";

const connectDB=async ():Promise<void>=>{
    try{
        const mongoURI: string = process.env.DEFAULT_MONGODB_URL || "mongodb://localhost:27017/real-time-chat";
        const conn=await mongoose.connect(mongoURI,{
            // useNewUrlParser: true,
            // useUnifiedTopology: true,
        })
        //check mongodb connection state
        // console.log(`mogodb connected:${conn.connection.host}`);
    }catch(error){
        console.log(`Error:${error.message}`);
        process.exit(1)
    }
}

export default connectDB;
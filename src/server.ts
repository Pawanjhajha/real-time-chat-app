
//now the entry point of our application is server.ts not app.ts
import dotenv from 'dotenv';
dotenv.config()
//dotenv code hamesa app ko import karne se phale ayega agar ham server.ts and app.ts file bana rhahe hai to
import connectDB from './config/dbConfig';
import app from "./app";

// Connect to MongoDB
connectDB();
const port:number=Number(process.env.PORT);
app.listen(port,()=>{
    console.log(`server is running on port:${port}`);
})

import express from 'express';
const app=express();
//now entry point is not the app.ts
import authRouter from './routers/authRouter';
import userRouter from './routers/userRouter';
import chatRouter from './routers/chatRouter'

// app.listen(5000,()=>{
//     console.log(`server is running on port:5000`);
// })
//enable the json data.json data convert into js object and pass the router
app.use(express.json())

//register router 
app.use('/api/v1/auth',authRouter)
app.use('/api/v1/user',userRouter)
app.use('/api/v1/chat',chatRouter)
export default app;
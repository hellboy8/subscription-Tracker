import express from 'express';
import './config/env.js';
import { PORT } from './config/env.js';
import authRouter from './routes/auth.routes.js';
import userRouter from './routes/user.routes.js';
import subscriptionRouter from './routes/subscription.routes.js';
import connectDB from './database/db.js';
import errormiddleware from './middleware/error.middleware.js';
import cookieParser from 'cookie-parser';


const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(cookieParser());

app.use('/api/v1/auth',authRouter);
app.use('/api/v1/users',userRouter);
app.use('/api/v1/subscriptions',subscriptionRouter);

app.use(errormiddleware);

app.get("/",(req,res) => {
    res.send("welcome to Subscription-tacker");
})

app.listen(PORT,async () =>{
    console.log('server is running on port',PORT);

     await connectDB();
    
})

export default app;
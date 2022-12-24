import  dotenv from 'dotenv' 
dotenv.config()
import express from 'express';
import mongoose from 'mongoose';
import userRoutes from './routes/users.js'
import videoRoutes from './routes/videos.js'
import commentRoutes from './routes/comments.js'
import authRoutes from './routes/auth.js'
import cookieParser from 'cookie-parser'
import cors from 'cors';

const app = express();

const connect = ()=>{
 mongoose.set('strictQuery', false);
 mongoose.connect(process.env.MONGO_URL,(err,db) => {
if(err)
    console.log(`Database not connected :   ${err}`)
else
    console.log('Database connected Successfully')
})
}
app.use(cookieParser());
app.use(cors({ origin: 'http://localhost:3000', credentials: true }));
app.use(express.json());

app.use('/api/auth',authRoutes)
app.use('/api/users',userRoutes)
app.use('/api/videos',videoRoutes)
app.use('/api/comments',commentRoutes)

//for error handling
app.use((err,req,res,next)=>{
  const status = err.status || 500;
  const message = err.message || "Something went wrong!"; 
  return res.status(status).json({
    success : false,
    status,
    message,
  })
})

app.listen(5000,()=>{
    connect();
    console.log("Server Connected");
})

import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db.js';
import dns from "dns";
import chatRouter from './routes/chat.routes.js';


dns.setServers([
  "8.8.8.8",
  "1.1.1.1"
]);
dotenv.config()
const app=express();
app.use(express.json())
app.use('/',chatRouter)
app.listen(process.env.PORT,()=>{
    console.log(`Chat service is running on port ${process.env.PORT}`)
    connectDB()
})
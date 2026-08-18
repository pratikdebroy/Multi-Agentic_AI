import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db.js';
import dns from "dns";
import router from './routes/auth.routes.js';
import authrouter from './routes/auth.routes.js';

dns.setServers([
  "8.8.8.8",
  "1.1.1.1"
]);
dotenv.config()
const app=express();
app.use(express.json())
app.use('/',authrouter)
app.get('/',(req,res)=>{
    res.send('Auth service is running')
})
app.listen(process.env.PORT,()=>{
    console.log(`Auth service is running on port ${process.env.PORT}`)
    connectDB()
})
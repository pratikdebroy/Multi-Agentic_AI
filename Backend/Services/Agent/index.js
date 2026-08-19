import "dotenv/config";
import express from 'express'
import connectDB from './config/db.js';
import dns from "dns";
import { agentRouter } from './graph/agentRouter.js';
dns.setServers([
  "8.8.8.8",
  "1.1.1.1"
]);
const app=express();
app.use(express.json())
app.use('/',agentRouter)
app.listen(process.env.PORT,()=>{
    console.log(`Agent service is running on port ${process.env.PORT}`)
    connectDB()
})
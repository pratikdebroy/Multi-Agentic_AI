import express from 'express'
import dotenv from 'dotenv'
import proxy from 'express-http-proxy'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import protect from './middleware/auth.middleware.js'
import getCurrentUser from './controller/user.controller.js'
import { proxyWithHeader } from './utils/proxyWithHeader.js'
dotenv.config()
const app=express();
app.use(cors({
    origin:process.env.FRONTEND_URL,
    credentials:true
}
))
app.use(cookieParser())
app.use('/api/auth',proxyWithHeader(process.env.AUTH_SERVICE_URL))
app.use('/api/chat',protect,proxyWithHeader(process.env.CHAT_SERVICE_URL))
app.use('/api/agent',protect,proxyWithHeader(process.env.AGENT_SERVICE_URL))
app.use('/api/me',protect,getCurrentUser)
app.get('/',(req,res)=>{
    res.send('Gateway is running')
})

app.listen(process.env.PORT,()=>{
    console.log(`Gateway is running on port ${process.env.PORT}`)
})
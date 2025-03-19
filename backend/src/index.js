// const express = require("express")
import express from "express"
import authRoutes from "./routes/auth.route.js"
import dotenv from "dotenv"
import cookieParser from "cookie-parser"
import messageRoutes from "./routes/message.route.js"
import cors from "cors";

import {connectDB} from './lib/db.js'
dotenv.config()
const app = express();

const PORT = process.env.PORT
const FRONTEND_URL = process.env.FRONTEND_URL || "http://localhost:5173";
// this will allow you to extract json data out of body

app.use(express.json()); 
app.use(cookieParser());
app.use(cors({ 
    origin: FRONTEND_URL,
    credentials: true
}))


app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);

app.listen(PORT, ()=>{
    console.log("server is running on PORT :" + PORT);
    connectDB()
}) 
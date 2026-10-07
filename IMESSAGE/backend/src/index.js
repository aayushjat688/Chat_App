// const express = require('express');
//imports
import express from 'express'
import 'dotenv/config';
import connectDB from './lib/db.js';
import { clerkMiddleware } from '@clerk/express'
import cors from 'cors';
import fs from 'fs';
import path from 'path';

//middleware
app.use(clerkMiddleware());
app.use(cors({
  origin:process.env.FRONTEND_URL,
  credentials:true
}));
app.use(express.json());

const publicDir = path.join(process.cwd(), "public");

//this is for production
if(fs.existsSync(publicDir)) {
  app.use(express.static(publicDir));

  app.get("/{*any}", (req,res,next)=>{
    res.sendFile(path.join(publicDir, "index.html", (err) => next(err)));
  })
}

const app = express();
const PORT = process.env.PORT;
app.get('/',(req,res)=>{
  res.send('Hello')
})


app.listen(PORT , ()=>{
connectDB();
  console.log('Server Started at 3000')});
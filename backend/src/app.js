import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
import path from 'path';
dotenv.config({ path: "./.env" });


import database from './db/database.js';
import userRouter from './routes/userRoutes.js';
import eventRouter from './routes/eventRoutes.js';



const app = express();

app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true }));
app.use(express.static("./public"));

app.use(cookieParser())


//using the cors
app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);
database();

//using the routes 
app.use('/api/v1/users',userRouter);
app.use('/api/v1/events',eventRouter);


const PORT = 3000;

app.listen(PORT,()=>{
 console.log(`server is running in the port ${PORT}`);
})

export {app};
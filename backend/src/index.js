import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
import path from 'path';
import { connectToMongoDB } from './db/database.js' // Importing named export
import userRouter from './routes/userRoutes.js';
import eventRouter from './routes/eventRoutes.js';
import volunteerRouter from './routes/volunteerRoutes.js';

dotenv.config({ path: "./.env" });

const app = express();

app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true }));
app.use(express.static("./public"));

app.use(cookieParser());

// Using CORS
app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);

// Connecting to MongoDB
connectToMongoDB()
  .then(() => {
    // MongoDB connected successfully
    console.log("Connected to MongoDB Atlas");
    
    // Using routes
    app.use('/api/v1/users', userRouter);
    app.use('/api/v1/events', eventRouter);
    app.use('/api/v1/volunteers', volunteerRouter);

    // Starting the server
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB Atlas:", err);
  });

export { app };

// Import the necessary modules
import { MongoClient } from "mongodb";

// MongoDB connection URI
const uri = `mongodb+srv://jyoti:jyoti123@cluster0.6vyjog0.mongodb.net`;

// Variable to store the database connection
let db;

// Function to connect to MongoDB
const connectToMongoDB = async () => {
  try {
    // Create a new MongoClient instance with the URI
    const client = new MongoClient(uri);

    // Connect to MongoDB using the client
    await client.connect();

    // Once connected, assign the database instance to the 'db' variable
    db = client.db("techwebsite");

    // Log a message indicating successful connection
    console.log("Connected to MongoDB Atlas");
  } catch (err) {
    // If an error occurs during connection, log the error
    console.error("Error connecting to MongoDB Atlas:", err);
    throw err;
  }
};

// Function to get the database instance
const getDb = () => {
  // If the 'db' variable is not set (meaning not connected to the database), throw an error
  if (!db) {
    throw new Error("Database not connected");
  }
  // If connected, return the database instance
  return db;
};

// Export the 'connectToMongoDB' and 'getDb' functions
export { connectToMongoDB, getDb };

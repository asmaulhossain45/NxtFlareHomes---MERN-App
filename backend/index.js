import express from "express";
import mongoose from "mongoose";
import "dotenv/config";

const app = express();

// Ensure the DATABASE_URL is set
if (!process.env.DATABASE_URL) {
  console.error("Error: DATABASE_URL environment variable not set.");
  process.exit(1);
}

// Connect to MongoDB
mongoose.connect(process.env.DATABASE_URL)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error.message);
    process.exit(1);  // Exit the process if the connection fails
  });

// Start the Express server
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

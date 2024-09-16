import express from "express";
import mongoose from "mongoose";
import "dotenv/config";
import userRouter from "./routes/user.route.js";
import authRouter from "./routes/auth.route.js";

const app = express();
app.use(express.json());
const PORT = process.env.PORT || 3000;

// Ensure the DATABASE_URL is set
if (!process.env.DATABASE_URL) {
  console.error("Error: DATABASE_URL environment variable not set.");
  process.exit(1);
}

// Connect to MongoDB
mongoose
  .connect(process.env.DATABASE_URL)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error.message);
    process.exit(1); // Exit the process if the connection fails
  });

app.use("/api/user", userRouter);
app.use("/api/auth", authRouter);

// Start the Express server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

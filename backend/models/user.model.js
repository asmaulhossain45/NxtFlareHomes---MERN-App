import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true, // Removes whitespace from the beginning and end of the string
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true, // Converts the email to lowercase
    },
    password: {
      type: String,
      required: true,
      minlength: 6, // Sets a minimum length for the password
    },
  },
  {
    timestamps: true, // Automatically adds createdAt and updatedAt fields
  }
);

// Create and export the model
const User = mongoose.model("User", userSchema);
export default User;

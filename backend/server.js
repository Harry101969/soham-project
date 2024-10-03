const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors")
dotenv.config(); // For environment variables (DB URI, JWT secret)

const app = express();
app.use(
    cors({
      origin: ["http://localhost:5173", "http://localhost:5174"],
      methods: ["GET", "POST", "DELETE", "PUT"],
      credentials: true, //used to setup the cookies
    })
  );
app.use(express.json()); // Parse JSON

// MongoDB connection
mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("Connected to MongoDB"))
.catch(err => console.log("Failed to connect to MongoDB", err));

// Import routes
const userRoutes = require("./routes/user");
app.use("/user", userRoutes); // Use routes under /user

// Start server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

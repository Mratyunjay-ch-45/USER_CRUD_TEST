const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config(); // for .env variables
const authRoutes = require("./routes/user")

const app = express();
const PORT = process.env.PORT || 8000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect("mongodb://127.0.0.1:27017/Keploy", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log("✅ Connected to MongoDB"))
.catch(err => console.error("❌ MongoDB connection error:", err));


app.use("/api/auth", authRoutes);

// Start Server
app.listen(PORT, (err) => {
    if (err) {
        console.error("❌ Error starting the server:", err);
    } else {
        console.log(`🚀 Server is running on http://localhost:${PORT}`);
    }
});

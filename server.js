const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/shifts", require("./routes/shiftRoutes"));

const PORT = process.env.PORT || 5004;
app.listen(PORT, () => console.log(` Shift Service running on port ${PORT}`));

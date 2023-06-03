const express = require("express");
const rateLimit = require("express-rate-limit");
const cors = require("cors");
require("dotenv").config();

const PORT = process.env.PORT || 5000;

const app = express();

// Rate limiting
const limiter = rateLimit({
  windowMs: 10 * 60 * 1000, // 10min
  max: 100,
});

app.use(limiter);
app.set("trust proxy", 1);

// Enable cors
app.use(cors());

// Routes
app.use("/api", require("./routes/index"));

app.listen(PORT, () => console.log(`server is running on ${PORT}`));

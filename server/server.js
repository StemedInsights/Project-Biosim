const express = require("express");
const connectDb = require("./config/dbConnection");
const dotenv = require("dotenv").config();
const path = require('path');
const cors = require("cors");

const corsOptions = {
    origin: ["http://localhost:5173", "http://localhost:5001"]
}

const port = process.env.PORT || 5000;
const app = express();
connectDb();

app.use(cors(corsOptions));
app.use(express.static("public"));

app.use(express.json());
app.use("/api/biosim/course", require("./routes/courseRoutes"));

app.listen(port, () => {
    console.log(`server running on port ${port}`);
});
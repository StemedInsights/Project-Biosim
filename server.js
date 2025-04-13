const express = require("express");
const connectDb = require("./config/dbConnection");
const detenv = require("dotenv").config();

const port = process.env.PORT || 5000;
const app = express();
connectDb();

app.use(express.json());
app.use("/api/biosim/course", require("./routes/courseRoutes"));

app.listen(port, () => {
    console.log(`server running on port ${port}`);
});
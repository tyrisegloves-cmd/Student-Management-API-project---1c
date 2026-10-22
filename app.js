require("dotenv").config();

const express = require("express"); 
const connectDB = require("./config/db");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Student Management API is running!");
});

const PORT = process.env.PORT || 3001;

async function startServer() {
    await connectDB();
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
 });
}

startServer();
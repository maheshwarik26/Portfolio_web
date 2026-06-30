import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import contactRoutes from "./routes/contactRoutes.js";
import projectRoutes from "./routes/projectRoutes.js";


dotenv.config();
connectDB();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/contact",contactRoutes);
app.use("/api/projects",projectRoutes);
app.get("/", (req,res) => {
  res.send("Portfolio Api is running");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT,() => {
  console.log(`Server running on port ${PORT}`);
});
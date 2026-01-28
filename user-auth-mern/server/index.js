import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import authRoutes from './routes/authRoutes.js';
import usersRoutes from './routes/usersRoutes.js';
import adminRoutes from './routes/adminRoutes.js';

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/admin", adminRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/users", usersRoutes)

app.get("/", (req, res) => {
  res.send("Auth API Running");
});

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log("Server running");
    });
  })
  .catch(err => console.log(err));
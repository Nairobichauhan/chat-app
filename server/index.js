import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
//app.use(cors());
dotenv.config();

const app = express();
app.use(cors({
  origin: "http://localhost:3000",
  credentials: true
}));
app.use(express.json());

// connect mongodb
connectDB();

// routes
app.use("/auth", authRoutes);

app.get("/", (req,res)=>{
  res.send("Server working ✅");
})

app.listen(4000, ()=>{
  console.log("🚀 Server running on port 4000");
});

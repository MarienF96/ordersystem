import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import morgan from "morgan";
import cors from "cors";

import authRoutes from "./routes/auth.js";
import productRoutes from "./routes/producten.js";

dotenv.config();

const app = express();

mongoose
	.connect(process.env.MONGO_URI)
	.then(() => console.log("DB connected"))
	.catch((err) => console.log("DB error => ", err));

// middlewares
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

// router middleware
app.use("/api", authRoutes);
app.use("/api", productRoutes);

const port = process.env.PORT || 8000;

app.listen(port, () => {
	console.log(`Node server is running on port ${port}`);
});

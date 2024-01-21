import express from "express";
import cors from "cors";
import { dbConnect } from "./Config/dbConnect";
import userRoutes from "./Routes/userRoutes";
import dotenv from "dotenv";
dotenv.config();
const app = express();
//---------------------------------------------

// port config
const PORT: number = parseInt(process.env.PORT || "5000");
app.listen(PORT, () => {
  console.log("server started");
});

// cors configuratlion & middlewares
app.use(
  cors({
    origin: "https://portfolio-client-amber.vercel.app",
    methods: "GET, HEAD, PUT, PATCH, POST, DELETE",
    credentials: true,
  })
);
app.use(express.json());

// routes
app.use("/", userRoutes);

// db connection
dbConnect();

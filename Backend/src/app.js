import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

// middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// route imports
import authRoute from "./routes/auth.route.js";
import todoRoutes from "./routes/todo.route.js";

app.get("/health-check", (req, res) => {
  res.status(200).send("Health Check, Done!");
});

app.use("/api/auth", authRoute);
app.use("/api/todo", todoRoutes);

export { app };

import express, { Application, Request, Response, NextFunction } from "express";
import { libraryRoutes } from "./app/controllers/borrow.controller";
import cors from "cors";

const app: Application = express();

app.use(express.json());

app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://library-management-mongoose.vercel.app",
    ],
  })
);

app.use("/api", libraryRoutes);

// Centralized error handler
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  res.status(400).json({
    message: err.message || "Validation failed",
    success: false,
    error: err,
  });
});

app.get("/", (req: Request, res: Response) => {
  res.send("Welcome To Library Management App!!!");
});

export default app;

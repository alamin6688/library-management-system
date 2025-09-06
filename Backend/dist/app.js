"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const borrow_controller_1 = require("./app/controllers/borrow.controller");
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)({
    origin: [
        "http://localhost:5173",
        "https://library-management-mongoose.vercel.app",
    ],
}));
app.use("/api", borrow_controller_1.libraryRoutes);
// Centralized error handler
app.use((err, req, res, next) => {
    res.status(400).json({
        message: err.message || "Validation failed",
        success: false,
        error: err,
    });
});
app.get("/", (req, res) => {
    res.send("Welcome To Library Management App!!!");
});
exports.default = app;

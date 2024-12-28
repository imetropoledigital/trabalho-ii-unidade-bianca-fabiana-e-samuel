import express from 'express';
import connectDB from './app/database/mongodb.js';
import ROUTER from "./routes/routes.js";

const app = express();

// connection to Mongo
connectDB();

// Middleware
app.use(express.json());

// routes
app.use(ROUTER)

export default app;
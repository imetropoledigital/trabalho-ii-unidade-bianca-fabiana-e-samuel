import express from 'express';
import connectDB from './app/database/mongodb.js';
import router from './routes/routes.js';

const app = express();

// connection to Mongo
connectDB();

// Middleware
app.use(express.json());

// routes
app.use(router);

export default app;

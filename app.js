import express from 'express';
import connectDB from './config/db.js';
import locationRoutes from './routes/locationRoutes.js';
import zipRoutes from './routes/zipRoutes.js';

const app = express();

// Connect to MongoDB
connectDB();

// Middleware to parse JSON
app.use(express.json());

// Use routes
app.use('/api/locations', locationRoutes);
app.use('/api/zips', zipRoutes);

// Handle 404 errors
app.use((req, res, next) => {
  res.status(404).json({ message: 'Not Found' });
});

// Handle errors
app.use((err, req, res, next) => {
  res.status(500).json({ message: 'Internal Server Error', error: err.message });
});

export default app;

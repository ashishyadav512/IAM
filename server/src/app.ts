

import express, { Application } from 'express';
import cors from 'cors';
import morgan from 'morgan';
import rootRouter from './routes';
import notFound from './middlewares/notFound';
import globalErrorHandler from './middlewares/globalErrorhandler';

const app: Application = express();

// Allow frontend from any machine
app.use(cors({
  origin:   [
    'http://localhost:5173','http://192.168.155.100:5173',
  ],
  credentials: true
}));


app.use(express.json());
app.use(morgan('dev'));

// ✅ Test route
app.get('/', (req, res) => {
  res.json({ success: true, message: 'API is running successfully!' });
});

// Application routes
app.use('/api/v1', rootRouter);

// Global error handling middleware
app.use(globalErrorHandler);

// 404 Not Found Middleware
app.use(notFound);

export default app;


import express from 'express';
import healthRouter from './routes/health.route';

const app = express();

app.use(express.json());
app.use('/api/health', healthRouter);

export default app;

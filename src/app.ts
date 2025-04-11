import express from 'express';
import healthRouter from './routes/health.route';
import userRouter from "./routes/user.route";

const app = express();

app.use(express.json());
app.use('/api/health', healthRouter);
app.use('/api/users', userRouter);

export default app;

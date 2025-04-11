import express from 'express';
import healthRouter from './routes/health.route';
import userRouter from "./routes/user.route";
import clientRouter from "./routes/client.route";

const app = express();

app.use(express.json());
app.use('/api/health', healthRouter);
app.use('/api/users', userRouter);
app.use('/api/clients', clientRouter);

export default app;

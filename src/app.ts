import cors from 'cors';
import express, { Application, Request, Response } from 'express';
import router from './app/routes';
import globalErrorHandler from './app/middlewares/globalErrorHandler';
import notFound from './app/middlewares/notFound';

const app: Application = express();
app.use(express.json());
app.use(cors({ origin: ['http://localhost:5173'], credentials: true }));

app.use('/api/v1', router);

app.get('/', (req: Request, res: Response) => {
  res.send("Welcome to Janardhan's portfolio server!");
});

app.use(globalErrorHandler);
app.use(notFound);

export default app;

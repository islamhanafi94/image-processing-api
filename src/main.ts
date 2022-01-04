import express from 'express';
import { imageRouter } from './routes/image.routes';

const app = express();

app.use(imageRouter);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`App is running at http://localhost:${PORT}`);
});

export default app;

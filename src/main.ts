import express from 'express';
import path from 'path';
import { imageRouter } from './routes/image.routes';

const app = express();

app.set('views', path.join(__dirname + '/views'));
app.set('view engine', 'pug');

app.use(express.static('public'));
app.use(imageRouter);

const PORT = process.env.PORT || 1234;

app.listen(PORT, () => {
  console.log(`App is running at http://localhost:${PORT}`);
});

export default app;

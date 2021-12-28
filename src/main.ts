import express from 'express';

const app = express();

const PORT = process.env.PORT || 1234;

app.get('/', (req, res) => {
  return res.send({
    msg: 'Hello123',
  });
});
app.listen(PORT, () => {
  console.log(`App is running at http://localhost:${PORT}`);
});

import express from 'express';
import bodyParser from 'body-parser';
import paymentRouter from './routes/paymentRouter.js';

const app = express();
app.use(bodyParser.json());

app.post('/api/callback', (req, res) => {
  console.log(req.body);
 
  res.sendStatus(200);
});

app.use('/api', paymentRouter);

app.listen(5000, () => {
  console.log('Server running on port 5000');
});

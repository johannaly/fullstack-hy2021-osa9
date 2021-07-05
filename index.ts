import express from 'express';
import { bmiCalc } from './bmiCalculator';

const app = express();

app.get('/hello', (_req, res) => {
    res.send('Hello Full Stack!');
});

app.get('/bmi', (req, res) => {
   let data = {
       "measures": {
           "height": req.query.height,
           "weight": req.query.weight
       }
   }
  res.send(bmiCalc(data));
})

const PORT = 3003;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});


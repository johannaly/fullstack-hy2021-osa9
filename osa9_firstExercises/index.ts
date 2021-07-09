import express from 'express';
import { bmiCalc } from './bmiCalculator';
import { CalcEx } from './exerciseCalculator';

const app = express();
app.use(express.json());

app.get('/hello', (_req, res) => {
    res.send('Hello Full Stack!');
});

app.get('/bmi', (req, res) => {
   const data = {
       "measures": {
           "height": req.query.height,
           "weight": req.query.weight
       }
   };
  res.send(bmiCalc(data));
});

app.post('/exercises', (req, res) => {
    const data = {
        'exercises': {
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-assignment
            'daily_exercises': req.body.daily_exercises,
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-assignment
            'target': req.body.target
        }
    };
   // console.log("data " + data.exercises.daily_exercises + data.exercises.target)
    console.log (CalcEx(data));
    res.send(CalcEx(data));
});

const PORT = 3003;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});


import express from 'express';
import { bmiCalc } from './bmiCalculator';
import { CalcEx } from './exerciseCalculator'

const app = express();
app.use(express.json());

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

app.post('/exercises', (req, res) => {
    //const { daily_exercises, target } = req.body
   // console.log(req.body)
    let data = {
        'exercises': {
            'daily_exercises': req.body.daily_exercises,
            'target': req.body.target
        }
    }
   // console.log("data " + data.exercises.daily_exercises + data.exercises.target)
    console.log (CalcEx(data));
    res.send(CalcEx(data));
})

const PORT = 3003;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});


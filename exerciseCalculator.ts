interface ExerciseResult {
    periodLength: number,
    trainingDays: number,
    success: boolean,
    rating: number,
    ratingDescription: string,
    target: number,
    average: number
}

interface RecivedValues {
    dailyExerciseHours: Array<number>,
    target: number
}

const ParseArguments = (args: Array<string>) : RecivedValues => {
    const periodLength: number = args.length - 3;
    const target: number = Number(args[2]);
    const dailyExerciseHours: Array<number> = [];
    
    for (let i = 3; i <= args.length - 1; i++) {
        if (!isNaN(Number(args[i]))) {
            dailyExerciseHours.push(Number(args[i]));
        } else {
            throw new Error('Provided values were not numbers!'); 
        }
    }
    return {
        dailyExerciseHours: dailyExerciseHours,
        target: target
    }
}


type Target = number;
type ResultMessage = string;

const CountSum = (acc: number, current: number) => acc + current;

const calculateExercises = (dailyExerciseHours: Array<number>, target: Target) : ExerciseResult => {
 const periodLength = dailyExerciseHours.length;
 const trainingDays = dailyExerciseHours
    .map(h =>h.valueOf() > 0)
    .filter(h => h === true)
    .length;
 
 const average = dailyExerciseHours.reduce(CountSum)/dailyExerciseHours.length;
 const success = target > average ? false : true;

 const rating = (average: number) => {
    if (average >= 1 && average < 3) {
        return 2;
    } else if (average < 1) {
        return 3;
    } else if (average >= 3) {
        return 1;   
    }
}
 const ratingDescription = (rating: number) : ResultMessage => {
    if (rating === 3) {
         return "You could do better!";
     } else if (rating === 2) {
         return "Not too bad but could be better!";
     } else if (rating === 1) {
         return "Nice job, keep it like that!";
     }
 }

 return {
    periodLength: periodLength,
    trainingDays: trainingDays,
    success: success,
    rating: rating (average),
    ratingDescription: ratingDescription (rating (average)),
    target: target,
    average: average
 }
}

try {
    const { dailyExerciseHours, target } = ParseArguments(process.argv);
    console.log(calculateExercises(dailyExerciseHours, target));
} catch (e) {
    console.log("Error, something went wrong, message: ", e.message);
}



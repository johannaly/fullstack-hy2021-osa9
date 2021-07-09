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

const ParseArguments = (daily_exercises: Array<number>, target: number) : RecivedValues => {
   if(!isNaN(Number(target))){
       target = Number(target);
   } else {
    throw new Error('Malformated parameters');
   }

    const dailyExerciseHours: Array<number> = [];
    
    for (let i = 3; i <= daily_exercises.length - 1; i++) {
        if (!isNaN(Number(daily_exercises[i]))) {
            dailyExerciseHours.push(Number(daily_exercises[i]));
        } else {
            throw new Error('Malformated parameters'); 
        }
    }

    if (dailyExerciseHours.length === 0 || target === undefined) {
         throw new Error('parameters missing'); 
    } else {
        return {
            dailyExerciseHours: dailyExerciseHours,
            target: target
        };
    }
};


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
    } else {
        return 1;   
    }
};
 const ratingDescription = (rating: number) : ResultMessage => {
    if (rating === 3) {
         return "You could do better!";
     } else if (rating === 2) {
         return "Not too bad but could be better!";
     } else {
         return "Nice job, keep it like that!";
     }
 };

 return {
    periodLength: periodLength,
    trainingDays: trainingDays,
    success: success,
    rating: rating (average),
    ratingDescription: ratingDescription (rating (average)),
    target: target,
    average: average
 };
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const CalcEx = (data: any) => {
    try {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-assignment
        const dailyExerciseHours = data.exercises.daily_exercises;
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-assignment
        const target: number = data.exercises.target;

        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        if(dailyExerciseHours.length === 0 || target === undefined) {
            return {
                "error": "Parameters missing"
            };
        } else {
            ParseArguments(dailyExerciseHours, target);
            return calculateExercises(dailyExerciseHours, target); 
        }
       
    } catch (e: unknown) {
        return {
            "error": "Malformatted parameters"
        };
    }
};



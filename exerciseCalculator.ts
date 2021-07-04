interface ExerciseResult {
    periodLength: number,
    trainingDays: number,
    success: boolean,
    rating: number,
    ratingDescription: string,
    target: number,
    average: number
}

type Target = number;
type ResultMessage = string;

const CountAverage = (acc: number, current: number) => acc + current;

const calculateExercises = (dailyExerciseHours: Array<number>, target: Target) : ExerciseResult => {

 const periodLength = dailyExerciseHours.length;
 const trainingDays = dailyExerciseHours
    .map(h =>h.valueOf() > 0)
    .filter(h => h === true)
    .length;
 
 const average = dailyExerciseHours.reduce(CountAverage)/dailyExerciseHours.length;
 const success = target > average ? false : true;
 const rating = (trainingDays: number) => {
    if (trainingDays === 5) {
        return 2;
    } else if (trainingDays < 5) {
        return 3;
    } else if (trainingDays > 5) {
        return 1;   
    }
}
 const ratingDescription = (trainingDays: number) : ResultMessage => {
    if (trainingDays < 5) {
         return "You could do better!";
     } else if (trainingDays === 5) {
         return "Not too bad but could be better!";
     } else if (trainingDays > 5) {
         return "Nice job, keep it like that!";
     }
 }

 return {
    periodLength: periodLength,
    trainingDays: trainingDays,
    success: success,
    rating: rating (trainingDays),
    ratingDescription: ratingDescription (trainingDays),
    target: target,
    average: average
 }

}

console.log(calculateExercises([3, 0, 2, 4.5, 0, 3, 1], 2));

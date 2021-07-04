type Result = string;
type Bmi = number;

const calculateBmi = (height: number, weight: number) : Result => {
    const heightInM = height/100; 
    const bmi = weight/(heightInM * heightInM);

    if (bmi <= 15) {
        return "Very severly underweight";
    } else if (bmi <= 16 && bmi > 15) {
        return "Severly underweight";
    } else if (bmi <= 18.5 && bmi > 16) {
        return "Underweight";
    }  else if (bmi <= 25 && bmi > 18.5) {
        return "Normal (healthy weight)";
    } else if (bmi <= 30 && bmi > 25) {
        return "Overweight";
    }  else if (bmi <= 35 && bmi > 30) {
        return "Obese class I (Moderately obese)";
    }  else if (bmi <= 40 && bmi > 35) {
        return "Obese class II (Severely obese)";
    }  else if (bmi > 40) {
        return "Obese class III (Vesy severely obese)";
    }
}

console.log(calculateBmi(180, 74))
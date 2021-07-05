

interface BmiResult {
    height: number,
    weight: number,
    bmi : string
}


interface Measurements {
    height: number,
    weight: number
}

const ParseArgumentsMeasurements = (height: number, weight: number): Measurements => {
    if ((!isNaN(height)) && !isNaN(weight)) {
        return {
          height: Number(height),
          weight: Number(weight)
        }
      } else {
        throw new Error('Provided values were not numbers!');
      }
}

const calculateBmi = (height: number, weight: number) : BmiResult => {
    const heightInM = height/100; 
    const bmi = weight/(heightInM * heightInM);

    if (bmi <= 15) {
        return {
            "weight": Number(weight),
            "height": Number(height),
            "bmi": "Very severly underweight"
        }

    } else if (bmi <= 16 && bmi > 15) {
        return {
            "weight": Number(weight),
            "height": Number(height),
            "bmi" :"Severly underweight"
        }
        
    } else if (bmi <= 18.5 && bmi > 16) {
        return {
            "weight": Number(weight),
            "height": Number(height),
            "bmi": "Underweight"
        }

    } else if (bmi <= 25 && bmi > 18.5) {
        return {
            "weight": Number(weight),
            "height": Number(height),
            "bmi": "Normal (healthy weight)"
        }
        
    } else if (bmi <= 30 && bmi > 25) {
        return {
            "weight": Number(weight),
            "height": Number(height),
            "bmi": "Overweight"
        }
       
    }  else if (bmi <= 35 && bmi > 30) {
        return {
            "weight": Number(weight),
            "height": Number(height),
            "bmi":  "Obese class I (Moderately obese)"
        }
       
    }  else if (bmi <= 40 && bmi > 35) {
        return {
            "weight": Number(weight),
            "height": Number(height),
            "bmi": "Obese class II (Severely obese)"
        }

    }  else if (bmi > 40) {
        return {
            "weight": Number(weight),
            "height": Number(height),
            "bmi": "Obese class III (Very severely obese)"
        }

    } else {
        return {
            "weight": Number(weight),
            "height": Number(height),
            "bmi": "Something went wrong, cannot count bmi"
        } 
    }
}

export const bmiCalc = (data: any) => {
    try {
        const height = data.measures.height;
        const weight = data.measures.weight;
        ParseArgumentsMeasurements(height, weight);
        return calculateBmi(height, weight);
        
    } catch (e) {
        return {
            "error": "Malformatted parameters"
        }
    }
}


function calculateBMI(weight, height) {
    var heightInMeters = height / 100;
    var bmi = weight / (heightInMeters ** 2);
    return bmi;
}

function getBMICategory(bmi) {
    if (bmi < 18.5) {
        return "Underweight";
    } else if (bmi >= 18.5 && bmi < 25) {
        return "Normal weight";
    } else if (bmi >= 25 && bmi < 30) {
        return "Overweight";
    } else {
        return "Obese";
    }
}

var weight = 70; 
var height = 170; 

var bmi = calculateBMI(weight, height);
var category = getBMICategory(bmi);

console.log("BMI: " + bmi.toFixed(2));
console.log("Category: " + category);

const userInfo = {
    height: height,
    weight: weight,
    bmi: bmi,
}

console.log(userInfo);
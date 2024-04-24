function milesToKilo(miles) {
    const kilometers = miles * 1.60934;
    console.log(`The distance of ${kilometers} kms is equal to ${miles} miles `);
}

function bmi(height, weight) {
    const centimeters = height * 2.54;
    const kilograms = weight / 2.2046;
    console.log(centimeters, kilograms);
    const BMI = kilograms / (centimeters / 100) ** 2;
    console.log(BMI);
}

milesToKilo(100);
bmi(100, 100);

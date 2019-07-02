function printTax(veichleType, carPower, carAge) {
    let power = Number(carPower);
    let age = Number(carAge);
    let type = veichleType;

    switch (type) {
        case 'car': 
            console.log(calcCarTax(age, power).toFixed(2) + ' lv.');
        break;
        case 'motorcycle':
            console.log(calcCycleTax(power) + ' lv')

    }

    function calcCarTax(age, power){
        let taxPower = calcCarPowerTax(power);

        if (age < 5) {
            return taxPower * 2.80;
        } else if (age < 14) {
            return taxPower * 1.50;
        } else {
            return taxPower * 1;
        }

        function calcCarPowerTax(power){
            let tax=0;
    
            if (power < 37) {
                tax = power * 0.43;
            } else if (power < 55){
                tax = power * 0.50;
            } else if (power < 74) {
                tax = power * 0.68;
            } else if (power < 110){
                tax = power * 1.38;
            } else {
                tax = power * 1.54;
            }
    
            return tax.toFixed(2);
        }
    }

    function calcCycleTax(power) {
        let tax = 0;

        if (power > 750) {
            tax = 125;
        } else if (power > 490) {
            tax = 94;
        } else if (power > 350) {
            tax = 63;
        } else if (power > 250) {
            tax = 44;
        } else if (power > 125) {
            tax = 31;
        } else {
            tax = 15;
        }

        return tax.toFixed(2);
    }
}


printTax('car', 90, 7);
function solve(input) {
    let parking = [];
    
    for (let string of input) {
        let [command, regPlate] = string.split(', ');
        if(command === 'IN') {
            parking.push(regPlate);
        } else if(command === 'OUT') {
            if(parking.includes(regPlate)) {
                parking.splice(parking.indexOf(regPlate), 1)
            }
        }
    }
    if(parking.length > 0){
        let sorted = parking.sort((a, b) => sorting(a, b));
        console.log(sorted.join('\n'));
    } else {
        console.log(`Parking Lot is Empty`);
    }

     function sorting(a, b) {
        let aNumber = a.slice(2, 6);
        let bNumber = b.slice(2, 6);
        return aNumber - bNumber;
    }
}

solve(['IN, CA2844AA',
'IN, CA1234TA',
'OUT, CA2844AA',
'IN, CA9999TT',
'IN, CA2866HI',
'OUT, CA1234TA',
'IN, CA2844AA',
'OUT, CA2866HI',
'IN, CA9876HH',
'IN, CA2822UU']

);
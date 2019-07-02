function solve(input) {
    let hoodCitizens = new Map();
    let hoods = input[0].split(', ');
    
    for (let string of hoods) {
        hoodCitizens.set(string, []);
    }
    for (let i = 1; i < input.length; i++) {
        let current = input[i].split(' - ');
        let hood = current[0];
        let person = current[1];
        if(hoods.includes(hood)) {
            hoodCitizens.get(hood).push(person);
        }
    }

    let sorted = [...hoodCitizens].sort((a, b) => sorting(a, b));
    function sorting(a, b) {
        let aLength =  a[1].length;
        let bLength = b[1].length;
        return bLength - aLength;
    }

    for (let [key, value] of sorted) {
        if(value.length == 0) {
            console.log(`${key}: ${value.length}`);
        } else {
            console.log(`${key}: ${value.length}\n--${value.join('\n--')}`);
        }
       
    }
}

solve([
'Abbey Street, Herald Street, Bright Mews',

'Bright Mews - Garry',
'Bright Mews - Andrea',
'Invalid Street - Tommy',
'Abbey Street - Billy'
]);
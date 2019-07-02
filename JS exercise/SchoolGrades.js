function solve(input) {
    let students = new Map();

    for (let string of input) {
        let tokens = string.split(' ');
        let name = tokens.shift();
        let grades = tokens.map(Number);

        if(!students.has(name)) {
            students.set(name, [...grades]);
        } else {
            let curGrades = students.get(name);
            let newGrades = curGrades.concat(grades);
            students.set(name, [...newGrades]);
        }
    }
    let sorted = [...students].sort((a, b) => average(a, b));
    for (let [key, value] of sorted) {
        console.log(`${key}:${value.join(',')}`);
    }
    function average(a, b) {
        let aSum = 0;
        let aGrades = a[1];
        for (let i = 0; i < aGrades.length; i++) {
            aSum += aGrades[i];
        }

        let bSum = 0;
        let bGrades = b[1];
        for (let j = 0; j < bGrades.length; j++) {
            bSum += bGrades[j];
        }

        let aAver = aSum / aGrades.length;
        let bAver = bSum / bGrades.length;
        return aAver - bAver;
    }
}

solve([
'Lilly 4 6 6 5',
'Tim 5 6',
'Tammy 2 4 3',
'Tim 6 6']
);
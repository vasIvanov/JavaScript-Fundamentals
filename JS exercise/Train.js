function solve(input) {
    let wagons = input
            .shift()
            .split(" ")
            .map(Number);
    let maxCap = +input.shift();

    for (let i = 0; i < input.length; i++) {
        if(input[i].includes('Add')) {
            let addCommand = input[i].split(" ");
            let addPassengers = +addCommand[1];
            wagons.push(addPassengers);
        } else {
            let passengers = +input[i];
            for (let j = 0; j < wagons.length; j++) {
                if(wagons[j] + passengers <= maxCap) {
                    wagons[j] += passengers;
                    break;
                }
                
            }
        }
        
    }
    
    console.log(wagons.join(" "));
}

solve(['0 0 0 10 2 4',
'10',
'Add 10',
'10',
'10',
'10',
'8',
'6']
);
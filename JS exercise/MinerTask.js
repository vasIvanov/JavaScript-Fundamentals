function solve(input) {
    let resources = new Map();
    for (let i = 0; i < input.length; i += 2) {
        let resourceQunt = 0;
        let resourceType = '';

        resourceQunt = +input[i + 1];

        resourceType = input[i];
        
        
        if(!resources.has(resourceType)){
            resources.set(resourceType, resourceQunt);
        } else {
            let currQuant = resources.get(resourceType);
            let newQuant = currQuant + resourceQunt;
            resources.set(resourceType, newQuant);
        }
    }
    for (let [key ,value] of resources) {
        console.log(`${key} -> ${value}`);
    }
}

solve([
    'gold',
    '155',
    'silver',
    '10',
    'copper',
    '17',
    'gold',
    '15'
    
]);
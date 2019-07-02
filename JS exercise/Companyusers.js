function solve(input) {
    let employes = new Map ();
    for (let string of input) {
        let stringArr = string.split(' -> ');
        let companyName = stringArr[0];
        let userID = stringArr[1];
        if(!employes.has(companyName)) {
            employes.set(companyName, []);
            
            userSet = employes.get(companyName);
            if(!userSet.includes(userID)){
                userSet.push(userID);
            }
        } else {
            userSet = employes.get(companyName);
            if(!userSet.includes(userID)) {
                userSet.push(userID);
            }
            
        }
    }

    let sorted = [...employes].sort((a, b) =>{
        return a[0].localeCompare(b[0]);
    })

    for (let [key, value] of sorted) {
        
        console.log(key);
        let output = value.map(e => `-- ${e}`).join('\n');
        console.log(output);
    }
}

solve([
'SoftUni -> AA12345',
'SoftUni -> BB12345',
'Microsoft -> CC12345',
'HP -> BB12345'
]);
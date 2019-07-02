function solve(input) {
    let guests = [];
    for (let i = 0; i < input.length; i++) {
        let command = input[i].split(" ");
        let name = command.shift();
        if(command.includes('not')){
            if(!guests.includes(name)) {
                console.log((`${name} is not in the list!`))
            } else {
                let index = guests.indexOf(name);
                guests.splice(index, 1);
            }
        } else {
            if(!guests.includes(name)){
                guests.push(name);
            } else {
                console.log(`${name} is already in the list!`);
            }
        }
        
    }
     
    console.log(guests.join("\n"));
}

solve(['Tom is going!',
'Annie is going!',
'Tom is going!',
'Garry is going!',
'Jerry is going!']
);
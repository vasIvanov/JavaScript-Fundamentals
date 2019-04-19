function solve(input) {
    let bandToPrintMembers = input.pop();
    input.pop();
    let bandTime = new Map();
    let bandMembers = new Map();
    for (let string of input) {
        let [command, name, timeOrMembers] = string.split('; ');
        if(command === 'Play') {
            timeOrMembers = +timeOrMembers;
            if(!bandTime.has(name)) {
                bandTime.set(name, timeOrMembers);
            } else {
                let currTime = bandTime.get(name);
                bandTime.set(name, currTime + timeOrMembers);
            }
        } else if(command === 'Add'){
            if(!bandMembers.has(name)) {
                let members = timeOrMembers.split(', ');
                bandMembers.set(name, members);
            } else {
                let currMemb = bandMembers.get(name);
                let members = timeOrMembers.split(', ');
                for  (let member of members) {
                    if(!currMemb.includes(member)){
                        currMemb.push(member);
                    }
                }
            }
        }
    }
    let totalTime = 0;
    for (let [key, value] of bandTime) {
        totalTime += value;
    }
    let sortedByTime = [...bandTime].sort((a, b) => {
        return b[1] - a[1];
    })
    console.log(`Total time: ${totalTime}`);
    for (let pairs of sortedByTime) {
        console.log(`${pairs[0]} -> ${pairs[1]}`);
    }
    console.log(bandToPrintMembers);
    let membersToPirnt = bandMembers.get(bandToPrintMembers);
    for (let member of membersToPirnt) {
        console.log(`=> ${member}`);
    }
}

solve([ 'Add; The Beatles; John Lennon, Paul McCartney',
'Add; The Beatles; Paul McCartney, George Harrison',
'Add; The Beatles; George Harrison, Ringo Starr',
'Play; The Beatles; 3698',
'Play; The Beatles; 3828',
'start of concert',
'The Beatles' ]
);
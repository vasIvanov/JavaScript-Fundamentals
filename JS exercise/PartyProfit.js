function solve(input) {
    let coins = 0;
    let partySize = +input[0];
    let days = +input[1];
    for (let i = 1; i <= days; i++) {
        if(i % 10 === 0) {
            partySize -= 2;
        }

        if(i % 15 === 0) {
            partySize += 5;
        }
        coins  += 50 - (2 * partySize);
        if(i % 3 === 0) {
            coins = coins - (3 * partySize);
        }

        if(i % 5 === 0 ) {
            coins += 20 * partySize;

            if(i % 3 === 0) {
                coins -= 2 * partySize; 
            }
        } 
    }

    let result = coins / partySize;

    console.log(`${partySize} companions received ${Math.floor(result)} coins each.`);
}

solve([ '3', '5' ]);
function solve(input) {
    let rooms = input[0].split('|');
    let health = 100;
    let coins = 0;
    let flag = true;
    let roomCount = 1;
    for (let room of rooms) {
        if(!flag) {
            break;
        }
        let [action, quantity] = room.split(' ');
        quantity = +quantity;
        switch(action) {
            case 'potion':
                if(health + quantity <= 100) {
                    health += quantity;
                    console.log(`You healed for ${quantity} hp.`);
                    console.log(`Current health: ${health} hp.`);
                } else {
                    
                    console.log(`You healed for ${100 - health} hp.`);
                    health = 100;
                    console.log(`Current health: ${health} hp.`);
                }
                break;
            case 'chest':
                console.log(`You found ${quantity} coins.`);
                coins += quantity;
                break;
            default:
                health -= quantity;
                if(health > 0) {
                    console.log(`You slayed ${action}.`)
                } else {
                    console.log(`You died! Killed by ${action}.`);
                    console.log(`Best room: ${roomCount}`);
                    flag = false;
                }
                break;
                
        }
        roomCount++;
    }
    if(flag) {
        console.log(`You've made it!`);
        console.log(`Coins: ${coins}`);
        console.log(`Health: ${health}`);
    } 
}

solve([ 'cat 10|potion 30|orc 10|chest 10|snake 25|chest 110' ])
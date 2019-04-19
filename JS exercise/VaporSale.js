function solve(input){
    let games = [];
    let gamesWithDlc = [];
    let gamesNoDlc = [];
    let inputArr = input[0].split(', ');
    for (let string of inputArr) {
        let obj = {};
        if(!string.includes(':')){
            let [name, price] = string.split('-');
            price = +price;
            if(!games.find((el) => el.name === name)){
                obj.name = name;
                obj.price = price;
                games.push(obj);
            }
           

        } else {
            let [name, dlc] = string.split(':');
            let gameToAddDlc = games.find((el) => el.name === name);
            if(gameToAddDlc){
                gameToAddDlc.dlc = dlc;
                gameToAddDlc.price = (gameToAddDlc.price*0.2) + gameToAddDlc.price;
            }
        }

       
    }

    for (let obj of games) {
        if(obj.hasOwnProperty(`dlc`)){
            obj.price = obj.price * 0.5;
            gamesWithDlc.push(obj);
        } else {
            obj.price = obj.price - (obj.price * 0.2);
            gamesNoDlc.push(obj);
        }
    }

    gamesWithDlc.sort((a, b) => {
       return a.price - b.price;
    });

    gamesNoDlc.sort((a, b) => {
        return b.price - a.price;
    })



    for (let obj of gamesWithDlc) {
        console.log(`${obj.name} - ${obj.dlc} - ${obj.price.toFixed(2)}`)
    }

    for (let obj of gamesNoDlc) {
        console.log(`${obj.name} - ${obj.price.toFixed(2)}`);
    }
    
}

solve([ 'Center Strike-14.99, FortLite-25, BattleShield 5-64.74, BattleShield 5:CoD edition, Dog of War-45, Dead Red Redemption-100, Dead Red Redemption:no DLC' ]);
function solve (input) {

    let gameResult = new Map ();
    let cardPower = new Map([
            ['2', 2],
            ['3', 3],
            ['4', 4],
            ['5', 5],
            ['6', 6],
            ['7', 7],
            ['8', 8],
            ['9', 9],
            ['10', 10],
            ['J', 11],
            ['Q', 12],
            ['K', 13],
            ['A', 14],
    ]); 

    let cardType = new Map([
        ['C', 1],
        ['D', 2],
        ['H', 3],
        ['S', 4],
    ]);

    for (let string of input) {
        let [name, cards] = string.split(': ');
        cards = cards.split(', ');
        if(!gameResult.has(name)) {
            gameResult.set(name, new Set());  
        } 

        let currDeck = gameResult.get(name);
        for (let card of cards) {
            currDeck.add(card);
        }

     

      

    }
    for (let [name, deck] of gameResult) {
        let value = score(deck);

        console.log(`${name}: ${value}`);
    }

    function score(deck) {
        let sum = 0;
         for (let card of deck) {
             let cardPowerKey = '';
             let cardTypeKey = '';
             if(card.length === 2) {
                 cardPowerKey = card[0];
                 cardTypeKey = card[1];
             }

             if(card.length === 3) {
                 cardPowerKey = card[0] + card[1];
                 cardTypeKey = card[2];
             }

             let cardPowerValue = cardPower.get(cardPowerKey);
             let cardMulti = cardType.get(cardTypeKey);

             sum += cardPowerValue * cardMulti;
         }


        return sum;
    }

 

    
}

solve([
'Pesho: 2C, 4H, 9H, AS, QS',
'Slav: 3H, 10S, JC, KD, 5S, 10S',
'Peshoslav: QH, QC, QS, QD',
'Slav: 6H, 7S, KC, KD, 5S, 10C',
'Peshoslav: QH, QC, JS, JD, JC',
'Pesho: JD, JD, JD, JD, JD, JD'
]);
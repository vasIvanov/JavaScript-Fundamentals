function solve() {
    let values = {
        '2': 2,
        '3': 3,
        '4': 4,
        '5': 5,
        '6': 6,
        '7': 7,
        '8': 8,
        '9': 9,
        '10': 10,
        'J': 11,
        'Q': 12,
        'K': 13,
        'A': 14 
    };
   
    let button = document.querySelector('button');
    button.addEventListener('click', () => {
        let from = document.getElementById('from').value;
        let to = document.getElementById('to').value
        let suit = document.querySelector('#exercise select').value

        let fromValue = values[from];
        let toValue = values[to];
        let suitValue = getSuitValue(suit);
        
        
        for (let i = fromValue; i <= toValue; i++) {
            
            
            let cardEle = document.createElement('div');
            cardEle.setAttribute('class', 'card');

            let firstPara = document.createElement('p');
            firstPara.innerHTML = `&${suitValue};`;
            
            
            let lastPara = document.createElement('p');
            lastPara.innerHTML = `&${suitValue};`;

            let middlePara = document.createElement('p')
            middlePara.textContent = `${Object.keys(values).find(key => values[key] === i)}`;
            
            
            
            cardEle.appendChild(firstPara);
            cardEle.appendChild(middlePara)
            cardEle.appendChild(lastPara);
                
            document.getElementById('cards').appendChild(cardEle);

           
        }
        document.getElementById('from').value = '';
        document.getElementById('to').value = '';
        
    })

    
    
    function getSuitValue(suit){
        if(suit.includes('Hearts')){
            return 'hearts';
        } else if(suit.includes('Spades')){
            return 'spades';
        } else if(suit.includes('Diamonds')){
            return 'diamond';
        } else if(suit.includes('Clubs')){
            return 'clubs';
        }
        
    }
}
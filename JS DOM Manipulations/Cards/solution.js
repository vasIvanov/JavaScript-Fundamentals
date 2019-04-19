function solve() {
    Array.from(document.querySelectorAll('img')).map((img) => {
        img.addEventListener('click', clickEvent)
    })

    function clickEvent(e){
        let card = e.target;
        card.src = './images/whiteCard.jpg';
        card.removeEventListener('click', clickEvent);
        let parent = card.parentNode

        let spans = document.getElementById('result').children;

        if(parent.id === 'player1Div'){
            spans[0].textContent = card.name;
        } else {
            spans[2].textContent = card.name;
        }
        
        if(spans[0].textContent && spans[2].textContent){
            let winner;
            let looser;

            if(+spans[0].textContent > +spans[2].textContent){
                winner = document.querySelector(`#player1Div img[name="${spans[0].textContent}"]`);
                looser = document.querySelector(`#player2Div img[name='${spans[2].textContent}']`);
                
            } else {
                winner = document.querySelector(`#player2Div img[name="${spans[2].textContent}"]`);
                looser = document.querySelector(`#player1Div img[name='${spans[0].textContent}']`);

            }
            winner.style.border = '2px solid green';
            looser.style.border = '2px solid darkred';

            let history = document.getElementById('history');
            history.textContent += `[${spans[0].textContent} vs ${spans[2].textContent}] ` ;

            setTimeout(() => {
                spans[0].textContent = '';
                spans[2].textContent = '';
            }, 2000);
        }
        
    }
  
}
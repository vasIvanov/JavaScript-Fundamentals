function solve() {
    let myButton = document.querySelectorAll('button')[0];
    myButton.addEventListener('click', () => {
        let inputField = document.getElementById('myChatBox');
        let msg = inputField.value;
        
        let chronologyEl = document.getElementById('chatChronology');
        let msgPara = document.createElement('p');
        let msgSpan = document.createElement('span');
        msgSpan.textContent = 'Me';
        msgPara.textContent = msg;
        let divEl = document.createElement('div');
        divEl.appendChild(msgSpan);
        divEl.appendChild(msgPara);
        divEl.style.textAlign = 'left';

        chronologyEl.appendChild(divEl);

        inputField.value = '';
    })

    let otherBtn = document.querySelectorAll('button')[1];
    otherBtn.addEventListener('click', () => {
        let inputField = document.getElementById('peshoChatBox');
        let msg = inputField.value;

        let chronologyEl = document.getElementById('chatChronology');
        let msgPara = document.createElement('p');
        let msgSpan = document.createElement('span');
        msgSpan.textContent = 'Pesho';
        msgPara.textContent = msg;
        let divEl = document.createElement('div');
        divEl.appendChild(msgSpan);
        divEl.appendChild(msgPara);
        divEl.style.textAlign = 'right';

        chronologyEl.appendChild(divEl);

        inputField.value = '';
    })
   
    
}
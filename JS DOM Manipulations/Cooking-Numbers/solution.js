function solve() {
    let chopBtnEle = document.querySelector('#operations button:nth-child(1)');
    let diceBtnEle = document.querySelector('#operations button:nth-child(2)');
    let spiceBtnEle = document.querySelector('#operations button:nth-child(3)');
    let bakeBtnEle = document.querySelector('#operations button:nth-child(4)');
    let filletBtnEle = document.querySelector('#operations button:nth-child(5)');
        
    chopBtnEle.addEventListener('click', () => {
        let input = checkForInput();
        paraContent(chopBtn(input));
    });
    diceBtnEle.addEventListener('click', () => {
        let input = checkForInput();
        paraContent(diceBtn(input));
    });
    spiceBtnEle.addEventListener('click', () => {
        let input = checkForInput();
        paraContent(spiceBtn(input));
    });
    bakeBtnEle.addEventListener('click', () => {
        let input = checkForInput();
        paraContent(bakeBtn(input));
    });
    filletBtnEle.addEventListener('click', () => {
        let input = checkForInput();
        paraContent(filletBtn(input));
    });

    function paraContent(content){
        document.querySelector('main>div>p').textContent = content;
    }
        
    function checkForInput(){
        let input = document.querySelector('#exercise input').value;
        if(!input){
            document.querySelector('#exercise input').value = 0;
            return 0;
       } else {
            return checkOutput(input);
       }
    }

    function checkOutput(input){
        if(document.querySelector('main>div>p').textContent){
            return +document.querySelector('main>div>p').textContent;
        } else {
            return input
        }
    }

    function chopBtn(input){

        return +input / 2;
    }

    function diceBtn(input) {
        return Math.sqrt(input);
    }

    function spiceBtn(input){
        return +input + 1;
    }

    function bakeBtn(input){
        return +input * 3;
    }

    function filletBtn(input){
        
        return +input * 0.8;
    }
}

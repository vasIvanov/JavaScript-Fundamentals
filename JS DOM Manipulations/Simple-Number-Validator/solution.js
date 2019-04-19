function validate() {
    let button = document.querySelector('button');
    let weights = [2,4,8,5,10,9,7,3,6]
    button.addEventListener('click', () => {
        let inputNumber = document.querySelector('input').value;
        if(numberValidation(inputNumber)){
            document.getElementById('response').textContent = `This number is Valid!`;
        } else {
            document.getElementById('response').textContent = `This number is NOT Valid!`;
        }
        
    })


    function numberValidation(inputNumber){
        if(inputNumber.length !== 10){
            return false;
        } else {
            return checkLastDigit(inputNumber)
        }
    }

    function checkLastDigit(inputNumber){
        let lastDigit = +inputNumber[inputNumber.length - 1]
        let sum = 0;

        for (let i = 0; i < inputNumber.length - 1; i++) {
            sum += +inputNumber[i] * weights[i];
            
        }
        let result = sum % 11;
        if(result === 10) result = 0;
        if(result === lastDigit){
            return true;
        } else{
            return false;
        }
    }
}
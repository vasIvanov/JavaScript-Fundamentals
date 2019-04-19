function leapYear() {
    let button = document.querySelector('button');

    button.addEventListener('click', () => {
        let inputYear = document.querySelector('input').value;
        if(isLeapYear(inputYear)){
            document.querySelector('#year h2').textContent = 'Leap Year';
            document.querySelector('#year div').textContent = inputYear;
        } else {
            document.querySelector('#year h2').textContent = 'Not Leap Year';
            document.querySelector('#year div').textContent = inputYear;
        }
        document.querySelector('input').value = '';
    })

    function isLeapYear(inputYear){
        return ((inputYear % 4 === 0) && (inputYear % 100 !== 0)) || (inputYear % 400 === 0);
    }
}
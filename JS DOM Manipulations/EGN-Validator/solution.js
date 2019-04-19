function validate() {
    let button = document.querySelector('button');
    let weights = [2, 4, 8, 5, 10, 9, 7, 3, 6];

    button.addEventListener('click', () => {
        let year = document.getElementById('year').value;
        let month = document.getElementById('month').value;
        let date = document.getElementById('date').value;
        let male = document.getElementById('male');
        let female = document.getElementById('female');
        let regCode = document.getElementById('region').value;
        if(+year < 1900 || +year > 2100) return;
        if(+regCode < 43 || +regCode > 999) return;
        if(month === 'Select a month') return;
        if(+date < 1 || +date > 31) return;
        if(!male.checked && !female.checked) return;
        
        document.getElementById('egn').textContent = `Your EGN is: ${generateEGN(year, month, date, regCode, male, female)}`;
        
        clearValues()
        
        function clearValues(){
            document.getElementById('year').value = ''
            document.getElementById('month').value = 'Select a month';
            document.getElementById('date').value = '';
            document.getElementById('region').value = '';
            document.getElementById('male').checked = false;
            document.getElementById('female').checked = false;
        }

        function generateEGN(year, month, date, regCode, male, female){
            let yearDigits = year[2] + year[3];
            let monthDigits = getMonth(month);
            let dateDigits = getDate(date);
            let newRegCode = getGenderCode(regCode, male, female);
            let validDigit = validateCode(yearDigits, monthDigits, dateDigits, newRegCode)
            
            return yearDigits + monthDigits + dateDigits + newRegCode + validDigit.toString();
        }

        function getGenderCode(regCode, male, female){
            let genderDigitArr = regCode.split('');
            if(+genderDigitArr[genderDigitArr.length - 1] % 2 === 0 && male.checked){
                genderDigitArr[genderDigitArr.length - 1] = '2';
            } else if(+genderDigitArr[genderDigitArr.length - 1] % 2 !== 0 && female.checked){
                genderDigitArr[genderDigitArr.length - 1] = '1';
            }
            if(genderDigitArr.length < 3){
                genderDigitArr.unshift('0');
            }
            return genderDigitArr.join('');
        }

        function validateCode(yearDigits, monthDigits, dateDigits, regCode){
            let code = yearDigits + monthDigits + dateDigits + regCode;
            let sum = 0;

            for (let i = 0; i < code.length; i++) {
                sum += +code[i] * weights[i];
                
            }
            let result = sum % 11;
            if(result === 10) result = 0;
            return result;
        }

        function getMonth(month){
            let months = {
                "January": '01',
                "February": '02',
                "March": '03',
                "April": '04',
                "May": '05',
                "June": '06',
                "July":'07',
                "August":'08',
                "September":'09',
                "October":'10',
                "November":'11',
                "December":'12'
            }
            return months[month];
        }

        function getDate(date){
            let dateDigit = '';
            if(+date < 10){
                dateDigit = '0' + date;

            }else {
                dateDigit = date;
            }
            return dateDigit;
        }
     
    })
}
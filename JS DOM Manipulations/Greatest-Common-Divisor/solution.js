function greatestCD() {
    let firstNum = document.getElementById('num1').value;
    let secNum = document.getElementById('num2').value;
    let resultEle = document.getElementById('result');
    let result = gcd(firstNum, secNum);
    resultEle.textContent = result;


    function gcd(a, b){
        if(!b){
            return a;
        }

        return gcd(b, a % b);
    }
}
function solve() {
  let number = +document.getElementById('num1').value;
  let string = document.getElementById('type').value.toLowerCase();
  let resultEle = document.getElementById('result');

  function inputValidation(number, string){
    if((string !== 'fahrenheit' && string !== 'celsius') || !number){
      resultEle.innerHTML = 'Error!';
      return false;
    } else {
      return true;
    }
  }

  function conversionResult(number, string){
    if(inputValidation(number, string)){
      if(string === 'celsius'){
        let result = Math.round(number*9/5+32);
        resultEle.innerHTML = `${result}`
      } else {
        let result = Math.round((number - 32) * 5 / 9);
        resultEle.innerHTML = `${result}`;
      }
    }
  }
  resultEle.innerHTML = '';
  conversionResult(number, string);

}
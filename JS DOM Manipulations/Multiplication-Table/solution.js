function solve() {
  let num1 = +document.getElementById('num1').value;
  let num2 = +document.getElementById('num2').value;
  let divResult = document.getElementById('result');

  function inputValidator(num1, num2){
    if(num1 > num2){
      divResult.innerHTML = 'Try with other numbers.';
    } 
  }

  function printTable(num1, num2){
    
      for (let i = num1; i <= num2; i++) {
        let result = num2 * i;
        let p = document.createElement('p');
        p.innerHTML = `${i} * ${num2} = ${result}`;
        divResult.appendChild(p);
      }
    
  }
  divResult.innerHTML = '';
  
  inputValidator(num1, num2);
  printTable(num1, num2);
}
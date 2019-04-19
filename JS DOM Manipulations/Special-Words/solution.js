function solve() {
  let firstNumber = +document.getElementById('firstNumber').value;
  let secondNumber = +document.getElementById('secondNumber').value;
  let firstString = document.getElementById('firstString').value;
  let secondString = document.getElementById('secondString').value;
  let thirdString = document.getElementById('thirdString').value;
  let resultDiv = document.getElementById('result');

  for (let i = firstNumber; i <= secondNumber; i++) {
    if(multipleOfThree (i) && multipleOfFive(i)){
      let p = document.createElement('p');
      p.textContent = `${i} ${firstString}-${secondString}-${thirdString}`;
      resultDiv.appendChild(p);
    } else if(multipleOfThree (i)){
        let p = document.createElement('p');
        p.textContent = `${i} ${secondString}`;
        resultDiv.appendChild(p)
    } else if(multipleOfFive(i)){
        let p = document.createElement('p');
        p.textContent = `${i} ${thirdString}`;
        resultDiv.appendChild(p);
    } else{
        let p = document.createElement('p');
        p.textContent = `${i}`;
        resultDiv.appendChild(p);
    }
    
  }

  function multipleOfThree (i){
    if(i % 3 === 0){
      return true;
    } else {
      return false;
    }
  }

  function multipleOfFive(i){
    if(i % 5 === 0) {
      return true;
    } else {
      return false;
    }
  }



}
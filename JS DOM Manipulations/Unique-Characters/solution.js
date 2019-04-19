function solve() {
  let string = document.getElementById('string').value;
  let uniqChars = '';

  function isWhiteSpace(i){
    if(string[i] === ' '){
      uniqChars += string[i];
    }
  }

  function isCurrCharUniq(i){
    if(!uniqChars.includes(string[i])){
      uniqChars += string[i];
    }
  }

  function findUniq(string){
    for (let i = 0; i < string.length; i++) {
      isWhiteSpace(i);
      isCurrCharUniq(i);
    }
  }
  findUniq(string)
  document.getElementById('result').innerHTML = uniqChars;
}
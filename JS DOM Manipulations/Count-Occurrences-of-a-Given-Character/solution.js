function solve() {
  let string = document.getElementById('string').value;
  let char = document.getElementById('character').value;
  let count = 0;
  
  
  function occuranceCount(string, char){
    let charsArr = string.split('').filter((el) => el !== ' ');
    for (let charEl of charsArr) {
      if(charEl === char){
        count ++;
      }
    }
    return count;
  }

  if(occuranceCount(string, char) % 2 === 0){
    document.getElementById('result').innerHTML = `Count of ${char} is even.`;
  } else {
    document.getElementById('result').innerHTML = `Count of ${char} is odd.`;
  }

}
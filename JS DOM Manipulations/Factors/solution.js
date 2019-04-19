function solve() {
   let number = document.getElementById('num').value;
   let arr =[]
   for (let i = 1; i <= number; i++) {
      if(number % i === 0){
         arr.push(i);
         
      }
      
   }
   arr = arr.join(' ');
   document.getElementById('result').innerHTML = arr;

}
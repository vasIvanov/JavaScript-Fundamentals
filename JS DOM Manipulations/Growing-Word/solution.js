function solve() {
   let count = 0;

   document.querySelector('button').addEventListener('click', () => {
      let wordPara = document.querySelector('#exercise p');
      if(count % 3 === 0 ) {
         wordPara.style.color = "blue";
      } else if (count % 3 === 1) {
         wordPara.style.color = "green";
      } else if (count % 3 === 2){
         wordPara.style.color = "red";
      }
      count++;
      wordPara.style.fontSize = `${count*2}px`;
   });
   
}
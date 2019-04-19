function solve(){
  let textElement = document.getElementById('input');
  let outputElement = document.getElementById('output');
  
  let textElementValue = textElement.textContent;

  let sents = textElementValue.split('.');
  let sentCount = 0;
  let parString = '';
  if(sents.length <= 3){
    for (let sent of sents) {
      if(sent.length > 0){
      sent += '.';
      let parElement = doc.createElement('p');
      parElement.textContent += sent;
      }
    }
  } else if(sents.length % 3 === 0){
      for (let sent of sents) {
        if(sent.length > 0){
          sent += '.';
         sentCount++;
         parString += sent; 
         if(sentCount === 3){
           let parElement = document.createElement('p');
           parElement.textContent = parString;
           outputElement.appendChild(parElement);


           sentCount = 0
           parString = '';
         }
        }
      }
    } else {
      let sentCounter = 0;
      let parString = '';
      let putedSent = 0;
      for (let sent of sents) {
        if(sent.length > 0){
          sentCounter ++;
          sent += '.';
          parString += sent;
          if(sentCounter % 3 === 0) {
            putedSent += 3;
            let parElement = document.createElement('p');
           parElement.textContent = parString;
           outputElement.appendChild(parElement);
           parString = '';
          }
        }
      }
      
      
      let lastParag = document.createElement('p');
      let lastParagContent = '';
      for (let i = putedSent; i < sents.length; i++) {

        sents[i] += '.' ;
        lastParagContent += sents[i];
      }
      lastParag.textContent = lastParagContent;
      outputElement.appendChild(lastParag);
    }

}





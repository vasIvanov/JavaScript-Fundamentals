function getNext() {
    let number = +document.getElementById('num').value;
    let seq = [number];
    while(number !== 1){
        if(number % 2 === 0) {
            number = number / 2
            
        } else{
            number = number * 3 + 1;
            
        } 
        seq.push(number);
    }
   
    
   seq.push('');
   seq = seq.join(' ');
   
    document.getElementById('result').textContent = seq
}

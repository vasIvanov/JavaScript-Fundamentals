function maxSeq(arr){
    let array = arr[0].split(' ');
    let maxSeq = -1;
    let seqCount = 0;
    let index = -1;
    let finalArr = [];

    for (let i = 0; i < array.length - 1; i++) {
        seqCount = 0;
        for (let j = i + 1; j < array.length; j++) {
            
            if(array[i] === array[j]){
                seqCount++;
            }  
            if(array[i] !== array[j] || j === array.length - 1){
                if(maxSeq < seqCount){
                    maxSeq = seqCount;
                    index = i; 
                            
                }
                break; 
            } 
        }
        
    }
    for (let i = 0; i <= maxSeq; i++) {
        finalArr[i] = array[index];
    }
    console.log(finalArr.join(' '));
}
maxSeq(['0 1 1 5 2 2 2 6 3 3']);

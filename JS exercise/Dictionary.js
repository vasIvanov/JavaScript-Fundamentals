function solve(input) {
    let endCommand = input.pop() ;
    let wordsToPrint = input.pop().split(' | ');
    let wordsAndDescr = input[0].split(' | ');
    let dictionary = new Map();
    for (let pair of wordsAndDescr) {
        let [word, description] = pair.split(': ');
        if(!dictionary.has(word)){
            description = description
            dictionary.set(word, description);
        } else {
            let currDescr = dictionary.get(word);
            let newDescr = currDescr + '; '+ description;
            dictionary.set(word, newDescr)
        }
        

        
    }

    for (let word of wordsToPrint) {
        if(dictionary.has(word)){
            let descriptions = dictionary.get(word);
            descriptions = descriptions.split('; ');
            descriptions.sort((a, b) => {
                let aLen = a.length;
                let bLen = b.length;
                return bLen - aLen;
 
            })
            dictionary.set(word, [...descriptions]);
            console.log(word);
            console.log(' -' + descriptions.join('\n -'));

            
        }
    }


    if(endCommand === 'List'){
        let wordsArr = [];
        for (let [word, desc] of dictionary) {
            wordsArr.push(word);
        }
        wordsArr.sort((a,b) => {
            return a.localeCompare(b);
        })
        console.log(wordsArr.join(' '));
    } else {
        return;
    }
    
}

solve([ 
'tackle: the equipment required for a task or sport | code: write code for a computer program | bit: a small piece, part, or quantity of something | tackle: make determined efforts to deal with a problem | bit: a short time or distance',
'bit | code | tackle',
'End' ])
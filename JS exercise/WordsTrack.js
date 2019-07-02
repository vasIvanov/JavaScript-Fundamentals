function solve(input){
    let wordsOcc = new Map();
    let wordsArr = input.shift().split(' ');
    let count = 0;

    for (let inputWord of wordsArr) {
        wordsOcc.set(inputWord, count)
    }
    for (let word of input) {
        if(wordsOcc.has(word)) {
            let curCount = wordsOcc.get(word);
            let newCount = curCount + 1;
            wordsOcc.set(word, newCount);
        }
    }
    let sorted = [...wordsOcc].sort((a, b) => sorting(a, b));

    function sorting(a, b) {
        let aOcc = a[1];
        let bOcc = b[1];
        return bOcc - aOcc;
    }
    for (let [key, value] of sorted) {
        console.log(`${key} - ${value}`);
    }
}

solve(['this sentence',

 'In','this','sentence','you','have','to','count',
 'the','occurances','of','the'
,'words','this','and','sentence','because','this','is','your','task']
);
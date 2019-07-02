function solve (input) {
    let wordsMap = new Map();
    
    for (let string of input) {
        let counter = 1;
        if(!wordsMap.has(string)) {
            wordsMap.set(string, counter);
        } else {
            let curCount = wordsMap.get(string);
            let newCount = curCount + 1;
            wordsMap.set(string, newCount);
        }
        
    }

    let sorted = [...wordsMap].sort((a, b) => b[1] - a[1]);
    for (let [key, value] of sorted) {
        console.log(`${key} -> ${value} times`);
    }
}

solve([
"Here", "is", "the", "first", "sentence",
 "Here", "is", "another", "sentence",
  "And", "finally", "the", "third", "sentence"]);
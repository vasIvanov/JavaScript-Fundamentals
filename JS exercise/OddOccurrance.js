function solve(input) {
    let lowerInput = input.toLowerCase();
    let arr = lowerInput.split(' ');
    let count = 1;
    let wordsMap = new Map();
    for (let word of arr) {
        if(!wordsMap.has(word)) {
            wordsMap.set(word, count);
        } else {
            let curCount = wordsMap.get(word);
            let newCount = curCount + 1;
            wordsMap.set(word, newCount);
        }
    }
    let filtered = [...wordsMap].filter(word => word[1] % 2 !== 0)
    let output = [];
    for (let [key, vlaue] of filtered) {
        output.push(key);
    }
    console.log(output.join(' '));
}

solve('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');
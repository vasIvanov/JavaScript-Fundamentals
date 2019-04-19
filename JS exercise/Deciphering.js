function solve(input) {
    let stringToDeciph = input.shift();
    let subStrings = input.pop().split(' ');

    let newString = '';
    for (let letter of stringToDeciph) {
        let code = letter.charCodeAt(0);
        if(code <= 34 || (code >= 36 && code <= 99) || code >= 126) {
            console.log(`This is not the book you are looking for.`);
            return;
        } 
    }

        
    for (let letter  of stringToDeciph) {
        let code = letter.charCodeAt(0);
        letter = String.fromCharCode(code - 3);
        newString += letter;
    }
    
    let replace = `${subStrings[0]}`;

    let regex = new RegExp(replace, 'g');
  
    newString = newString.replace(regex, subStrings[1]);
    
    console.log(newString)
}

solve([ 
'wkhfn#|rx#jhqfkr#phf#exw#|rxu#uholf#lv#khfgohg#lq#hfrwkhu#sohfhw',
'ec an' ])
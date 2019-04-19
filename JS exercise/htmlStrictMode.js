function solve(array) {
    let correctStrings = '';
    for (const string of array) {
        if(/^<([a-z0-9]+)><([a-z0-9]+)>[\w\W\s]*<\/\2>[\w\W\s]*<\/\1>$/gm.test(string)){
            correctStrings += (string.replace(/(<([^>]+)>)/ig,""));
            
            
        }
        correctStrings += ' ';
        
        
    }
    console.log(correctStrings);
}

solve([
'<div><p>This</p> is</div>',
'<div><a>perfectly</a></div>',
'<divs><p>valid</p></divs>',
'<div><p>This</div></p>',
'<div><p>is not</p><div>']
)
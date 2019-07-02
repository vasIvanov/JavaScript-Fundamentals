function loading(percent) {
    let bar = [];
    for (let i = 0; i < 10; i++) {
        bar[i] = '.';
        
    }
    for (let i = 0; i < (percent / 10); i++) {
        bar[i] = '%';
        
    }
    bar = bar.join('');
    if(percent < 100) {
        console.log(`${percent}% [${bar}]`);
        console.log('');
        console.log(`Still loading...`)
    } else {
        console.log(`${percent}% Complete!`);
        console.log('');
        console.log(`[${bar}]`);
    }
}

loading(50);
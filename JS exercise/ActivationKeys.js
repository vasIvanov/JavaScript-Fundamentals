function solve(input){
    let keys = input[0].split('&');
    let correctKeys = [];
    for (let key of keys) {
        let result = (/^[A-Za-z0-9]+$/g).test(key);
        if(result && (key.length === 16 || key.length === 25)) {
            if(key.length === 16){
                let s1 = key.substring(0, 4);
                let s2 = key.substring(4, 8);
                let s3 = key.substring(8, 12);
                let s4 = key.substring(12, 16);
                let dashedKey = s1 + '-' + s2 + '-' + s3 + '-' + s4;
                correctKeys.push(dashedKey) 
            } else {
                let s1 = key.substring(0, 5);
                let s2 = key.substring(5, 10);
                let s3 = key.substring(10, 15);
                let s4 = key.substring(15, 20);
                let s5 = key.substring(20, 25);
                let dashedKey = s1 + '-' + s2 + '-' + s3 + '-' + s4 + '-' + s5;
                correctKeys.push(dashedKey) 
            }
        }
    }
    let finalKey = [];
    for (let key of correctKeys) {
        key = key.split('');
         for (let i = 0; i < key.length; i++) {
             if((/[0-9]/g).test(key[i])){
                 let number = +key[i];
                 number = 9 - number;
                 number = number.toString();
                 key.splice(i, 1);
                 key.splice(i, 0, number);
                 
                 
             } else {
                let toUpper = key[i].toUpperCase();
                key.splice(i, 1);
                key.splice(i, 0, toUpper);
                console.log()
             }
      
         }
         key = key.join('');
         finalKey.push(key);
        
    }

    console.log(finalKey.join(', '));

}

solve(['t1kjZU764zIME6Dl9ryD0g1U8&-P4*(`Q>:x8\\yE1{({X/Hoq!gR.&rg93bXgkmILW188m&KroGf1prUdxdA4ln&U3WH9kXPY0SncCfs'])
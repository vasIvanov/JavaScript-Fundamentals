function solve (input) {
    let guests = new Map();
    let index = input.indexOf('PARTY');
    let guestInput = input.slice(0, index)

    for (let code of guestInput) {
       let guestType = '';

       if(isNaN(+code[0])){
           guestType = 'Regular';
       } else {
           guestType = 'VIP';
       }
       guests.set(code, guestType);
    }

    for (let i = index + 1; i < input.length; i++) {
        if(guests.has(input[i])) {
            guests.delete(input[i]);
        }
        
    }

    let sorted = [...guests].sort((a, b) =>{
        return b[1].localeCompare(a[1]);
    } );

    console.log(sorted.length);
    for (let [key, value] of sorted) {
        console.log(key);
    }
}

solve(['7IK9Yo0h',
'9NoBUajQ',
'Ce8vwPmE',
'SVQXQCbc',
'tSzE5t0p',
'PARTY',
'9NoBUajQ',
'Ce8vwPmE',
'SVQXQCbc'
]
);
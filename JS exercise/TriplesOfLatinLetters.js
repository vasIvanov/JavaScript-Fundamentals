function combo(number){
    for(let i=0;i<number;i++){
        for(let j=0;j<number;j++){
            for(let f=0;f<number;f++){
                let letter1=String.fromCharCode(97+i);
                let letter2=String.fromCharCode(97+j);
                let letter3=String.fromCharCode(97+f);
                console.log(letter1+letter2+letter3);
            }
        }
    }
}
combo(3);
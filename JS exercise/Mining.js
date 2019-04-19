function mining(input){
    let goldInLeva=0;
    let bitCoin=11949.16;
    let day=0;
    let bitCoinCount=0;
    let flag=false;
    for(let i=0;i<input.length;i++){
        if((i+1) % 3 ===0){
            input[i]=input[i]-(input[i]*0.30);
            goldInLeva=goldInLeva+(input[i]*67.51);
        } else{
             goldInLeva=goldInLeva+(input[i]*67.51);
        }
        if(day===0){
            if(goldInLeva>=bitCoin){
                day=i+1;
                flag=true;
            }
        }
        
    }
    if(goldInLeva>=bitCoin){
        bitCoinCount=Math.floor(goldInLeva/bitCoin);
    }

    let moneyLeft=goldInLeva-(bitCoin*bitCoinCount);
    
    console.log(`Bought bitcoins: ${bitCoinCount}`);
    if(flag){
        console.log(`Day of the first purchased bitcoin: ${day}`);
    }
    console.log(`Left money: ${(moneyLeft).toFixed(2)} lv.`);


}
mining([100,200,300]);
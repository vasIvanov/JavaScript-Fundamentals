function materials(base,incr){
    let stone=0;
    let marble=0;
    let lapis=0;
    let gold=0;
    let steps=1;
    for(let i=base;i>=(3||4);i-=2){
        
        stone=stone+(i-2)*(i-2)*incr;
        if(steps % 5===0){
            lapis=lapis+(((i*i)-((i-2)*(i-2)))*incr);
        } else{
            marble=marble+(((i*i)-((i-2)*(i-2)))*incr);
        }


        steps++;
    }
    let height=Math.floor(steps*incr);
    stone=Math.ceil(stone);
    marble=Math.ceil(marble);
    lapis=Math.ceil(lapis);

    if(base%2==0){
        gold=Math.ceil(4*incr);
    } else{
        gold=Math.ceil(1*incr);
    }
     console.log(`Stone required: ${stone}`);
     console.log(`Marble required: ${marble}`);
     console.log(`Lapis Lazuli required: ${lapis}`);
     console.log(`Gold required: ${gold}`);
     console.log(`Final pyramid height: ${height}`);
}
materials(11,1);
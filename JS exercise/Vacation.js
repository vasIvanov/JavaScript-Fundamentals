function vac(people,type,day){
    let prize=0;
    if(type=='Students'){
        if(day=='Friday'){
            if(people>=30){
                prize=(people*8.45)-((people*8.45)*0.15);
            } else{
                prize=people*8.45;
            }
        } else if(day=='Saturday'){
            if(people>=30){
                prize=(people*9.80)-((people*9.80)*0.15);
            } else{
                prize=people*9.80;
            }
        } else if(day=='Sunday'){
            if(people>=30){
                prize=(people*10.46)-((people*10.46)*0.15);
            } else{
                prize=people*10.46;
            }
        }
    } else if(type=='Buisness'){
        if(day='Friday'){
            if(people>=100){
                prize=(people-10)*10.90;
            } else{
                prize=people*10.90;
            }
        } else if(day='Saturday'){
            if(people>=100){
                prize=(people-10)*15.60;
            } else{
                prize=people*15.60;
            }
        } else if(day='Sunday'){
            if(people>=100){
                prize=(people-10)*16;
            } else{
                prize=people*16;
            }
        }      
    } 
    console.log(prize.toFixed(2));
}

vac(30,'Students','Sunday');
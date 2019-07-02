function spiceFlow(number){
    let storage=0;
    let days=0;
    while(number>=100){
        storage+=number;
        number-=10;
        if(storage<26){
            storage-=storage;
        } else{
            storage-=26;
        }
        days++;

    }

        if(storage<26){
            storage-=storage;
        } else{
            storage-=26;
        }
    
    
    console.log(days);
    console.log(storage);
}
spiceFlow(110);
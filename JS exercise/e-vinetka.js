function solve(array) {
    let townsArr = [];
    let vigneteObj = {};

    for (let obj of array) {
        if(!vigneteObj.hasOwnProperty(obj.town)){
            townsArr.push(obj.town);
            let tempObj  = {
                number:obj.regNumber,
                price:obj.price,
                modelName: obj.model
            }
            vigneteObj[obj.town] = [];
            vigneteObj[obj.town].push(tempObj);
            
        }else {
           
           let tempObj  = {
                number:obj.regNumber,
                price:obj.price,
                modelName: obj.model
            }
           vigneteObj[obj.town].push(tempObj)
        }
    }
    let max = 0;
    let city = '';
    for (let town of townsArr) {
        let temp = 0;
        for (let i = 0; i < vigneteObj[town].length; i++) {
            temp += vigneteObj[town][i].price            
        }
        if(max < temp) {
            max = temp;
            city = town
        }
        
    }
    console.log(`${city} is most profitable - ${max} BGN`);
    
    let mostProfitCityArr = vigneteObj[city];
    let modelCount = new Map();
    let priceMap = new Map();
    let models = []
    for (let item of mostProfitCityArr) {
        let model = item.modelName;
        if(!modelCount.has(model)){
            modelCount.set(model, 1)
            models.push(model);
            priceMap.set(model, item.price)
        }else {
            let curValue = modelCount.get(model);
            curValue++;
            modelCount.set(model, curValue);
        }   
    }  
    let mostDrivenCarCount = modelCount.get(models[0]);
    let mostDrivenCar = [...modelCount][0][0];
    let flag = true;
    let flag1 = false
    for (let [key, value] of modelCount) {
        if(mostDrivenCarCount < value){
            mostDrivenCar = key;
            mostDrivenCarCount = modelCount.get(key)
            flag = false;
            flag1 = false
        } else if(mostDrivenCarCount === value && flag){
            flag1 = true;
        }
    }
    if(flag1){
        let mostDrivenCarPrice = priceMap.get(models[0]);
        mostDrivenCar = [...priceMap][0][0]
        for (let [key, value] of priceMap) {
            if(mostDrivenCarPrice < value){
                mostDrivenCar = key;
                mostDrivenCarCount = modelCount.get(key)
            }
            
        }
    }
   console.log(`Most driven model: ${mostDrivenCar}`);
   let townsAndNumber = new Map(); 

   for (let town of townsArr) {
       vigneteObj[town].forEach((e) => {
           if(e.modelName === mostDrivenCar){
                if(!townsAndNumber.has(town)){
                    townsAndNumber.set(town, e.number)
                } else {
                    let currValue = townsAndNumber.get(town);
                    currValue += ', ' + e.number;
                    townsAndNumber.set(town, currValue)
                }
           }
       })
   }
   let filtered = [...townsAndNumber].sort((a, b) => {
       return a[0].localeCompare(b[0]);
   })
 
    for (let [key, value] of filtered) {
        value = value.split(', ').sort((a, b) => {
           return a.localeCompare(b);
        })
        console.log(`${key}: ${value.join(', ')}`);

    }
}
   
solve([ 
    { model: 'BMW', regNumber: 'B1234SM', town: 'Varna', price: 2},
    { model: 'BMW', regNumber: 'C5959CZ', town: 'Sofia', price: 8},
    { model: 'Tesla', regNumber: 'NIKOLA', town: 'Burgas', price: 9},
    { model: 'BMW', regNumber: 'A3423SM', town: 'Varna', price: 3},
    { model: 'Lada', regNumber: 'SJSCA', town: 'Sofia', price: 3} ]
    )
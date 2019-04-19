function solve(input) {
    let countryGuide = new Map();
    for (let string of input) {
        let stringArr = string.split(' > ');
        let country = stringArr[0];
        let city = stringArr[1];
        let price = stringArr[2];
        if(!countryGuide.has(country)) {
            countryGuide.set(country, new Map());
            let cityMap = countryGuide.get(country);
            if(!cityMap.has(city)) {
                cityMap.set(city, price);
            }
        } else {
            let cityMap = countryGuide.get(country);
            if(!cityMap.has(city)) {
                cityMap.set(city, price);
            } else {
                let currCityPrice = cityMap.get(city);
                if(+currCityPrice > +price) {
                    cityMap.set(city, price);
                }
            }
        }
    }
    let sortedAlpha = [...countryGuide].sort((a, b) =>{
        return a[0].localeCompare(b[0]);
    })

    for (let [country, cityMap] of sortedAlpha) {
        let sortedTowns = [...cityMap]
            .sort((a, b) => a[1] - b[1])
            .map(a =>`${a[0]} -> ${a[1]}`);
        
        console.log(`${country} -> ${sortedTowns.join(' ')}` );
    }

    
}

solve([
"Bulgaria > Sofia > 500",
"Bulgaria > Sopot > 800",
"France > Paris > 2000",
"Albania > Tirana > 1000",
"Bulgaria > Sofia > 200" 
]);
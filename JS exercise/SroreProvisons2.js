function solve(input) {
    let currStock = input[0];
    let orderedStock = input[1];

    let store = {};
    for (let i = 0; i < currStock.length; i+=2) {
        let productName = currStock[i];
        let productQuant = +currStock[i + 1];

        store[productName] = productQuant;
    }

    for (let j = 0; j < orderedStock.length; j+=2) {
        let productName = orderedStock[j];
        let productQuant = +orderedStock[j + 1];
        if(!store.hasOwnProperty(productName)){
            store[productName] = productQuant;
        } else {
            store[productName] +=productQuant;
        }
    }
    
    for (let [key, value] of Object.entries(store)) {
        console.log(key + ': ' + value)
    }
}

solve([
    ['Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'],
    ['Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30']
    ])
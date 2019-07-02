function solve(arr) {
    let storage = new Map();
    for (let string of arr) {
        let tokens = string.split(' ');
        let product = tokens[0];
        let quant = +tokens[1];

        if(!storage.has(product)) {
            storage.set(product, quant);
        } else {
            let curQuant = storage.get(product);
            let newQuant = curQuant + quant;
            storage.set(product, newQuant);
        }
    }

    for (let [key, value] of storage) {
        console.log(`${key} -> ${value}`);
    }
}

solve([
'tomatoes 10',
'coffee 5',
'olives 100',
'coffee 40']
);
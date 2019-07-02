function solve(input) {
    let catalog = {};

    for (let string of input) {
        let [name, price] = string.split(' : ');
        price = +price;
        let initial = name[0];

        if(!catalog.hasOwnProperty(initial)) {
            catalog[initial] = {};
        }

        let products = catalog[initial];
        products[name] = price;


 
    }
    let sorted = Object.entries(catalog).sort((a, b) => {
            return a[0].localeCompare(b[0]);
    })
   
    for (let [initial, products] of sorted) {
        let sortedFinal = Object.entries(products).sort((a, b) => {
            return a[0].localeCompare(b[0]);
         })
        console.log(initial);
        for (let product of sortedFinal) {
            console.log(`  ${product[0]}: ${product[1]}`);
        }
    }
}

solve([ 
    'Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10' 
])
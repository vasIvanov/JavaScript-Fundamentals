function solve(arr) {
    let phoneBook = new Map();

    for (let iterator of arr) {
        let person = iterator.split(' ');
        let name = person[0];
        let number = person[1];
        phoneBook.set(name, number);
        
    }
    for (let [key, value] of phoneBook) {
        console.log(`${key} -> ${value}`);
    }
}

solve([
'Tim 0834212554',
'Peter 0877547887',
'Bill 0896543112',
'Tim 0876566344']
);
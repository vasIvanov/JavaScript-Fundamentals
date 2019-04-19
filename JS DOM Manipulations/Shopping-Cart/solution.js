function solve() {
    let products = [];
    let productElements = document.querySelectorAll('.product');
    let textArea = document.querySelector('textarea');
    let buyButton = document.querySelector('#exercise > button');
    for (let i = 0; i < productElements.length; i++) {
       
        productElements[i].children[3].addEventListener('click', () => {
            let name = productElements[i].children[1].textContent;
            let price = +productElements[i].children[2].textContent.split(' ')[1];
            products.push({name, price});
            textArea.value += `Added ${name} for ${price} to the cart.\n`;
        })
    }
    
    buyButton.addEventListener('click', () => {
        let resultString = ''
        resultString = `You bought ${products.map(p => p.name).filter((el, index, arr) => {
            if(arr.indexOf(el) === index){
                return el;
            }
        }).join(', ')} for ${products.map(p => p.price).reduce((a, b) => a + b).toFixed(2)}`;
        textArea.value += resultString;
    })
    
}
function solve() {
    
    let button = document.querySelector('button');

    button.addEventListener('click', () => {
        let number = document.getElementById('input').value;
        let selectedFrom = document.getElementById('selectMenuFrom').value;
        let selectedConvertion = document.getElementById('selectMenuTo').value;
        if(selectedFrom === 'decimal'){
            if(selectedConvertion === 'binary'){
                let parsed = (+number).toString(2);
                document.getElementById('result').value = parsed;
            } else {
                let parsed = (+number).toString(16);
                document.getElementById('result').value = parsed.toUpperCase();
            }
        }
    })
}
function solve(array) {
    let inv = array.shift().split(" ");


    for (let i = 0; i < array.length; i++) {
        let [command, item] = array[i].split(" ");
        switch (command) {
            case 'Buy':
                if(!inv.includes(item)) {
                    inv.push(item);
                }
                break;
            
            case 'Trash': 
                if(inv.includes(item)) {
                    let index = inv.indexOf(item);
                    inv.splice(index, 1);
                }
                break;

            case 'Repair': 
                if(inv.includes(item)) {
                    let index = inv.indexOf(item);
                    let repaired = inv.splice(index, 1);
                    inv.push(repaired);
                }
                break;

            case 'Upgrade':
                let [itemToUp, upTo] = item.split("-");
                if(inv.includes(itemToUp)) {
                    let index = inv.indexOf(itemToUp);
                    inv.splice(index + 1, 0, `${itemToUp}:${upTo}`);
                }
                break;
            default:
                break;
        }
        
    }

    console.log(inv.join(" "));
    
}

solve(['SWORD Shield Spear',
'Trash Bow',
'Repair Shield',
'Upgrade Helmet-V']

)
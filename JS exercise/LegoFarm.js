function solve(input) {
    let legoMats = new Map([
        ['shards', 0],
        ['fragments', 0],
        ['motes', 0]
    ])
    let junkMats = new Map();
    let matFarm = input.split((' '));
    for (let i = 0; i < matFarm.length; i+=2) {
        let material = matFarm[i + 1].toLowerCase();
        let quant = +matFarm[i];

        if(legoMats.has(material)) {
            let currLegoQuant = legoMats.get(material);
            legoMats.set(material, currLegoQuant + quant);
        } else {
            if(!junkMats.has(material)) {
                junkMats.set(material, quant);
            } else {
                let currJunkQuant = junkMats.get(material);
                junkMats.set(mateiral, currJunkQuant + quant);
            }
        }
            let fragments = legoMats.get('fragments');
            let motes = legoMats.get(`motes`);
            let shards = legoMats.get('shards');
            if(fragments >= 250) {
                printing(fragments, 'fragments','Valanyr');
                break;

            }

            if(motes >= 250) {
                printing(motes,  'motes', 'Dragonwrath');
                break;
            }

            if(shards >= 250) {
                printing(shards,  'shards', 'Shadowmourne');
                break;
            }
    }
    


    function printing(matQuant, name, legoName) {
        legoMats.set(name, matQuant - 250);
        let legoSorted = [...legoMats].sort((a, b) =>{
            let result = b[1] - a[1];
            if(result === 0) {
                return a[0].localeCompare(b[0]);
            }
            return result;
        })
            console.log(`${legoName} obtained!`);
            for (let [key, value] of legoSorted) {
                console.log(`${key}: ${value}`)
            }
        let junkSorted = [...junkMats].sort((a, b) => a[0].localeCompare(b[0]));
        for (let [key, value] of junkSorted) {
            console.log(`${key}: ${value}`);
        }
    }
}
solve('3 Motes 5 stones 5 Shards 6 leathers 255 fragments 7 Shards');
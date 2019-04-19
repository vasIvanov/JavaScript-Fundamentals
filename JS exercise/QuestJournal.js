function solve(input) {
    input.pop();
    let quests = input.shift().split(', ');

    for (let string of input) {
        let [command, questName] = string.split(' - ');
        switch(command) {
            case 'Start':
                if(!quests.includes(questName)) {
                    quests.push(questName);
                }
                break;
            case 'Complete':
                if(quests.includes(questName)) {
                    let indexOfQuest = quests.indexOf(questName);
                    quests.splice(indexOfQuest, 1);
                }
                break;
            case 'Side Quest':
                let [quest, sideQuest] = questName.split(':');
                if(quests.includes(quest) && !quests.includes(sideQuest)) {
                    let indexOfQuest = quests.indexOf(quest);
                    quests.splice(indexOfQuest + 1, 0, sideQuest)
                }
                break;
            case 'Renew':
                if(quests.includes(questName)){
                    let indexOfQuest = quests.indexOf(questName);
                    quests.splice(indexOfQuest, 1);
                    quests.push(questName);
                }
                break;
        }
        
    }
    console.log(quests.join(', '));
}

solve([ 
'Hello World, If else',
'Complete - Homework',
'Side Quest - If else:Switch',
'Renew - Hello World',
'Retire!' ]);
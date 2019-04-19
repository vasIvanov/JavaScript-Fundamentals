function solve() {
	let hiddenQuests = Array.from(document.getElementsByClassName('hidden'));
	
	let buttons = document.querySelectorAll('button');
	let counter = 0;
	let eleNames = ['softUniYear', 'popularName', 'softUniFounder']
	for (let i = 0; i < buttons.length; i++) {
		
			buttons[i].addEventListener('click', () => {
				if(document.getElementsByName(`${eleNames[i]}`)[0].checked || document.getElementsByName(`${eleNames[i]}`)[1].checked || document.getElementsByName(`${eleNames[i]}`)[2].checked || document.getElementsByName(`${eleNames[i]}`)[3].checked){	
					let answer = document.getElementsByName(`${eleNames[i]}`)[i + 1].checked
					if(answer){
						counter++;
					}
					if(buttons[i].textContent === 'Next question'){
						hiddenQuests[i].style.display = 'block'
					} else {
						let resultEle = document.getElementById('result');
						
						if(counter === 3){
							resultEle.textContent = 'You are recognized as top SoftUni fan!';

						} else {
							resultEle.textContent = `You have ${counter} right answers`;
						}
						resultEle.style.color = 'green';
						
					}
				}
			})
		
	}
	
	
}
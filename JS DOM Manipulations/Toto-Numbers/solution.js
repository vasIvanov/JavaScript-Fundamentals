function solve() {
	let getDiv = document.getElementById('allNumbers');
	let button = document.querySelector('button');
	let flag = false;
	button.addEventListener('click', function show() {
		let myNumsEle = document.querySelector('input');
		let myNums = myNumsEle.value;
		let myNumsArr = myNums.split(' ');
		if(myNumsArr.length === 6){
			for (let k = 0; k < myNumsArr.length; k++) {
				if(+myNumsArr[k] > 0 && +myNumsArr[k] < 50){
					flag = true;
				} else {
					flag = false;
					break;
				}
			}
		}
		if(flag){
			for (let i = 1; i <= 49; i++) {
				let div = document.createElement('div');
				div.className = 'numbers';
				div.textContent = i;
				
				for (let j = 0; j < myNumsArr.length; j++) {
					if(+myNumsArr[j] === i){
						div.style.background = 'orange';
					}
				}
				getDiv.appendChild(div);
				myNumsEle.disabled = true;
				button.disabled = true;
			}
		}	
	})
}
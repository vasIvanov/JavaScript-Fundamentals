function solve() {
	let divEle = document.querySelector('#exercise div');
	
	/*setInterval(() => {
		let horValue = randomInt(1, 81);
		let vertValue = randomInt(1, 45);
		divEle.style.marginLeft = `${horValue}%`;
		divEle.style.marginTop = `${vertValue}%`;
		divEle.style.marginRight = `${randomInt(1, 81)}%`;
		divEle.style.marginBottom = `${randomInt(1, 45)}%`;
	}, 1000);*/


	setTimeout(function tick() {
		let horValue = randomInt(1, 81);
		let vertValue = randomInt(1, 45);
		divEle.style.marginLeft = `${horValue}%`;
		divEle.style.marginTop = `${vertValue}%`;
		divEle.style.marginRight = `${randomInt(1, 81)}%`;
		divEle.style.marginBottom = `${randomInt(1, 45)}%`;
		setTimeout(tick, 2000);
	}, 2000);





	function randomInt(min, max){
		return Math.round(Math.random() * (max - min)) + min
	}
	
	
	
	
}

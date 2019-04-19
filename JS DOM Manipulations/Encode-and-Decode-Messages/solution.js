function solve() {
	let buttons = Array.from(document.querySelectorAll('button'));
	let encodeBtn = buttons[0];
	let decodeBtn = buttons[1];
	let textAreas = Array.from(document.querySelectorAll('textarea'));
	let writeTextArea = textAreas[0];
	let readTextArea = textAreas[1];
	
	encodeBtn.addEventListener('click', ()=> {
		let msg = writeTextArea.value;
		let msgArr = msg.split('')
		let newMsg = [];
		for (let char of msgArr) {
			let charCode = char.charCodeAt(0);
			char = String.fromCharCode(charCode + 1);
			
			newMsg.push(char);
		}
		newMsg = newMsg.join('');
		
		
		writeTextArea.value = '';
		readTextArea.textContent = newMsg;
		
		
	});

	decodeBtn.addEventListener('click', () => {
		let msg = readTextArea.textContent;
		let msgArr = msg.split('');
		let newMsg = [];

		for (let char of msgArr) {
			let charCode = char.charCodeAt(0);
			char = String.fromCharCode(charCode - 1);
			newMsg.push(char);
		}
		newMsg = newMsg.join('');
		readTextArea.textContent = newMsg;
	})
	
}
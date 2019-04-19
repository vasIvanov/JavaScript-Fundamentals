function solve() {
	let titleElement = document.getElementById('createTitle');
	let titleElementValue = titleElement.value;
	let contentElement = document.getElementById('createContent');
	let contentElementValue = contentElement.value;

	if(titleElementValue && contentElementValue){
		let createTitleElement = document.createElement('h3');
		createTitleElement.textContent = titleElementValue;

		let createContentElement = document.createElement('p');
		createContentElement.textContent = contentElementValue;

		let createArticleElement = document.createElement('article');
		createArticleElement.appendChild(createTitleElement);
		createArticleElement.appendChild(createContentElement);

		let articlesElement = document.getElementById('articles');
		articlesElement.appendChild(createArticleElement);

		titleElement.value = '';
		contentElement.value = '';
	}
}
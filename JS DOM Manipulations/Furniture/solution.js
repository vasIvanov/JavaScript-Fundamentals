function solve() {
  let generateButton = document.querySelectorAll('button')[0];
  let inputArea = document.querySelectorAll('textarea')[0];
  let outputArea = document.querySelectorAll('textarea')[1];
  let buyButton = document.querySelectorAll('button')[1];
  let allFunriture = generateButtonEvent();
  buyButtonEvent(allFunriture);

  function generateButtonEvent () {
    let allFunriture = [];
    generateButton.addEventListener('click', () => {
      let furnituresObj = JSON.parse(inputArea.value);
      for (const furnitureObj of furnituresObj) {
        allFunriture.push(furnitureObj);
        let furnList = document.getElementById('furniture-list');
        let currFurnitureDiv = document.createElement('div');
        currFurnitureDiv.setAttribute('class', 'furniture');
        let namePara = document.createElement('p');
        namePara.textContent = furnitureObj.name;
        let imgEl = document.createElement('img');
        imgEl.src = furnitureObj.img;
        let pricePara = document.createElement('p');
        pricePara.textContent = furnitureObj.price;
        let decorationPara = document.createElement('p');
        decorationPara.textContent = furnitureObj.decoration;
        let checkBox = document.createElement('input');
        checkBox.setAttribute('type', 'checkbox');
        currFurnitureDiv.appendChild(namePara);
        currFurnitureDiv.appendChild(imgEl);
        currFurnitureDiv.appendChild(pricePara);
        currFurnitureDiv.appendChild(decorationPara);
        currFurnitureDiv.appendChild(checkBox);
        furnList.appendChild(currFurnitureDiv);
      }
    });
    return allFunriture;
  }

  function buyButtonEvent (allFunriture) {
    buyButton.addEventListener('click', () => {
      let checkBoxes = Array.from(document.querySelectorAll('input'));
      let indexes = [];
      
        

      for (const checkBox of checkBoxes) {
        if(checkBox.checked) {
          indexes.push(checkBoxes.indexOf(checkBox));
        }
      }
      let selectedFurnitures = [];
      
      for (const index of indexes) {
        selectedFurnitures.push(allFunriture[index]);
      }
      
      outputArea.value = `Bought furniture: ${selectedFurnitures.map(f => f.name).join(', ')}\n`;
      outputArea.value += `Total price: ${selectedFurnitures.map(f => +f.price).reduce((a, b) => a + b)}\n`;
      outputArea.value += `Average decoration factor: ${(selectedFurnitures.map(f => +f.decoration).reduce((a, b) => a + b) / indexes.length.toFixed(2))}`;
    })
  }
}
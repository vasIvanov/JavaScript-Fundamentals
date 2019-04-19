function solve() {
    let contentEle = document.getElementById('content');
    let buttons = document.getElementById('buttons');
    let stepsCount = 0;
    let firstStep = document.getElementById('firstStep');
    let secondStep = document.getElementById('secondStep');
    let thirdStep = document.getElementById('thirdStep');
    let nextBtn = document.querySelector('#buttons button');
    let cancelBtn = document.querySelectorAll('#buttons button')[1];
    buttons.addEventListener('click', (e) => {
        if(stepsCount === 0){
            if(e.target.textContent === 'Next'){
                contentEle.style.background = 'none';
                firstStep.style.display = 'inline-block';
                stepsCount++;
            } else {
                document.querySelector('section').style.display = 'none';
                
            }
        } else if(stepsCount === 1){
            if(e.target.textContent === 'Next'){
                if(document.querySelectorAll('input')[0].checked){
                    firstStep.style.display = 'none';
                    secondStep.style.display = 'inline-block';
                    
                    nextBtn.style.visibility = 'hidden';
                    setTimeout(() =>{
                        nextBtn.style.visibility = 'visible';
                    }, 3000)
                    stepsCount++;
                }
                
            } else{
                document.querySelector('section').style.display = 'none';
            }
        } else if(stepsCount === 2) {
            if(e.target.textContent === 'Next') {
                secondStep.style.display = 'none';
                thirdStep.style.display = 'inline-block';
                nextBtn.style.visibility = 'hidden';
                cancelBtn.textContent = 'Finish';
                stepsCount++;
            } else {
                document.querySelector('section').style.display = 'none';
            }
        } else if(stepsCount === 3) {
            document.querySelector('section').style.display = 'none';
        }
    }) 
}
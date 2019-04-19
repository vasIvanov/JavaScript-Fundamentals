function solve() {
  let anchorsCol = document.querySelectorAll('#exercise a');
  let anchors = Array.from(anchorsCol)
  let spansCol = document.querySelectorAll('span');
  let spans = Array.from(spansCol);
 
  for (let anchor of anchors) {
    anchor.addEventListener('click', ()=>{
      let index = anchors.indexOf(anchor);
      let spanString = spans[index].textContent;


      let SplitedSpanString = spanString.split(' ');
      let number = +SplitedSpanString[1];
      number++;
      spans[index].textContent = `Visited: ${number} times`;
    })
    
  }
}
function binarySearch() {
    let start = 0;
    let arrayEle = document.getElementById('arr').value;
    let numsArray = arrayEle.split(', ');
    let stop = numsArray.length - 1;
    let middle  = Math.floor((start + stop) / 2) ;
    let value = document.getElementById('num').value;

    while(numsArray[middle] !== value && start < stop){
        if(value < numsArray[middle]){
            stop = middle - 1;
        } else {
            start = middle + 1;
        }
        middle = Math.floor((start + stop) / 2);
    }
    if(numsArray[middle] !== value){
        document.getElementById('result').textContent = `${value} is not in the array`;
    } else {
        document.getElementById('result').textContent = `Found ${value} at index ${middle}`;
    }
}
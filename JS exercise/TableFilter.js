function solve(array, command) {
    let [operation, header, value] = command.split(' ');
    let headers = array.shift();
    let clonedArray = [];
   switch(operation){
       case 'sort': clonedArray = sortCommand(array, header, headers);
       break;
       case 'filter': clonedArray = filterCommand(array, header, value, headers);
       break;
       case 'hide': clonedArray = hideCommand(array, header, headers);
         headers.splice(headers.indexOf(header), 1);
        break;
   }
   clonedArray.unshift(headers);

   for (let i = 0; i < clonedArray.length; i++) {
    clonedArray[i] = clonedArray[i].join(' | ')
    }
   console.log(clonedArray.join('\n'));
   

   function sortCommand(array, header, headers) {
    

    switch(header){
        case `${headers[0]}`:array.sort((a, b) => {
            return a[0].localeCompare(b[0])
            
        })
        break;
        case `${headers[1]}`:array.sort((a, b) => {
            return +a[1] - +b[1];
        })
        break;
        case `${headers[2]}`:array.sort((a, b) => {
            return +a[2] - +b[2];
        })
        break;
    }
    return array;
   }

   function filterCommand (array, header, value, headers) {
       let filtered = [];
       for (let k = 0; k < headers.length; k++) {
           if(header === headers[k]){
                for (let i = 0; i < array.length; i++) {
                    if(array[i][k] === value){
                        filtered.push(array[i]);
                    }   
                }
                return filtered;
           }   
       } 
   }

   function hideCommand(array, header, headers) {
        let index = headers.indexOf(header);
        
        for (let i = 0; i < array.length; i++) {
            array[i].splice(index, 1);
            
            
        }
        return array;
   }

}

solve(
    [['firstName', 'age', 'grade', 'course'],
    ['Peter', '25', '5.00', 'JS-Core'],
    ['George', '34', '6.00', 'Tech'],
    ['Marry', '28', '5.49', 'Ruby']],
    'hide course'
    
)
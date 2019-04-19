function solve (input) {
    input.pop();
    for (let string of input) {
        let [artist, song] = string.split(':');
        let resultArtist = (/^[A-Z][a-z ']+$/g).test(artist);
        let resultSong = (/^[A-Z ]+$/g).test(song);

         if(resultArtist && resultSong) {
            let key = artist.length;
            let newArtist = '';
            let letter;
            for (let i = 0; i < artist.length; i++) {
               if(artist[i] !== ' ' && artist[i] !==`'`) {
                 let code = artist[i].charCodeAt(0);
                 if(code + key > 90 && code < 90 ) {
                     code = key + code - 90;
                     code = 96 + code;
                     letter = String.fromCharCode(code)
                     newArtist +=  letter;
              
                 }
                 else if(code + key > 122) {
                     code = key + code - 122;
                     code = 96 + code;
                     letter = String.fromCharCode(code)
                     newArtist +=  letter;
                 } else {
                     letter = String.fromCharCode(code + key);
                     newArtist +=  letter;
                 }
         
          
          
          
               } else {
                   newArtist += artist[i];              }
             }
             newArtist += '@';
             for (let i = 0; i < song.length; i++) {
                 if(song[i] !== ' ') {
                     let code = song[i].charCodeAt(0);
                     if(code + key > 90 && code < 90) {
                         code = key + code - 90;
                         code = 64 + code;
                         letter = String.fromCharCode(code);
                         newArtist +=  letter;
                     } else {
                         letter = String.fromCharCode(code + key);
                         newArtist +=  letter;
                     }
              
              
                 } else {
                     newArtist += song[i]; 
                 }
             }
             console.log(`Successful encryption: ${newArtist}`);
         } else {
             console.log(`Invalid input!`);
         }

    }

}

solve([ 

'Adele:ONE AND ONLY',
'Guns n\'roses:NOVEMBER RAIN',
'Christina Aguilera: HuRt',
'end' ]
);
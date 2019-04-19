function solve() {
   let buttons = Array.from(document.querySelectorAll('button'));
   let flag = false;
   
   
   
      buttons[0].addEventListener('click', function display(){
         let user1Unlock = document.getElementsByName('user1Locked')[1].checked
         if(user1Unlock){
            let hiddenCont = document.querySelectorAll('#user1HiddenFields')[0];
            
            
            hiddenCont.style.display = 'block';
            buttons[0].textContent = 'Hide it';
            flag = true;
            buttons[0].removeEventListener('click', display);
          }
         if(flag){
            buttons[0].addEventListener('click', function hide(){
               let user1Unlock = document.getElementsByName('user1Locked')[1].checked
               if(user1Unlock){
                  let hiddenCont = document.querySelectorAll('#user1HiddenFields')[0];
                  hiddenCont.style.display = 'none';
                  buttons[0].textContent = 'Show more';
                  flag = false;
                  buttons[0].removeEventListener('click', hide);
               }
            })
         }
      })

      buttons[1].addEventListener('click', function display(){
         let user1Unlock = document.getElementsByName('user2Locked')[1].checked
         if(user1Unlock){
            let hiddenCont = document.querySelectorAll('#user2HiddenFields')[0];
            
            
            hiddenCont.style.display = 'block';
            buttons[1].textContent = 'Hide it';
            flag = true;
            buttons[1].removeEventListener('click', display);
          }
         if(flag){
            buttons[1].addEventListener('click', function hide(){
               let user1Unlock = document.getElementsByName('user2Locked')[1].checked
               if(user1Unlock){
                  let hiddenCont = document.querySelectorAll('#user2HiddenFields')[0];
                  hiddenCont.style.display = 'none';
                  buttons[1].textContent = 'Show more';
                  flag = false;
                  buttons[1].removeEventListener('click', hide);
               }
            })
         }
      })

      buttons[2].addEventListener('click', function display(){
         let user1Unlock = document.getElementsByName('user3Locked')[1].checked
         if(user1Unlock){
            let hiddenCont = document.querySelectorAll('#user3HiddenFields')[0];
            
            
            hiddenCont.style.display = 'block';
            buttons[2].textContent = 'Hide it';
            flag = true;
            buttons[2].removeEventListener('click', display);
          }
         if(flag){
            buttons[2].addEventListener('click', function hide(){
               let user1Unlock = document.getElementsByName('user3Locked')[1].checked
               if(user1Unlock){
                  let hiddenCont = document.querySelectorAll('#user3HiddenFields')[0];
                  hiddenCont.style.display = 'none';
                  buttons[2].textContent = 'Show more';
                  flag = false;
                  buttons[2].removeEventListener('click', hide);
               }
            })
         }
      })

} 
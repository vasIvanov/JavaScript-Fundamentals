 function register() {
  let usernameElement = document.getElementById('username');
  let usernameElementValue = usernameElement.value;
  let passwordElement = document.getElementById('password');
  let passwordElementValue = passwordElement.value;
  let emailElement = document.getElementById('email');
  let emailElementValue = emailElement.value;

  let regCheck = /(.+)@(.+).(com|bg)/gm;
  let censor = '*';
  if(usernameElementValue && passwordElementValue && regCheck.test(emailElementValue)){
    let resultElement = document.getElementById('result');


   let censorship = censor.repeat(passwordElementValue.length);


   
    resultElement.innerHTML = `<h1>Successful Registration!</h1>Username: ${usernameElementValue}<br>Email: ${emailElementValue}<br>Password: ${censorship}` 


   setTimeout(() => resultElement.textContent = '', 5000);
  }
 }

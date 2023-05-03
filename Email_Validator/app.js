// getting all attribute


const emailInput = document.querySelector(".inputText");
const checkButton = document.querySelector(".checkButton");
const emailText=document.querySelector('.emailText')

console.log('v');
checkButton.onclick=(e)=>{
    e.preventDefault()
    console.log('a');
    // if(!emailInput.value.match(/^[A-Z0-9]+@[A-Z0-9]+\\.[A-Z]/))
if(true)
{emailText.textContent='ozlem@clarusway is not a valid email adress';

}else{
    emailText.textContent='ozlem@clarusway is a valid email adress'
 
}}




















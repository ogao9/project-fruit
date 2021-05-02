const q1_ans = document.querySelector('.Q1');
const submit_button = document.querySelector('.submit');
const display_result = document.querySelector('.result');
const guesses = document.querySelector('.guesses');

function checkGuess(e){
    e.preventDefault(); //prevents reload of page
    let userGuess = Number(q1_ans.value);
  
    guesses.textContent += userGuess + ' ';

    if(userGuess === 70){
        display_result.textContent = "CORRECT!";
    }else{
        display_result.textContent = "INCORRECT!";
        q1_ans.focus();
    }
    
    q1_ans.disabled = false;
    submit_button.disabled = false;
    q1_ans.value = '';
}


submit_button.addEventListener('click', checkGuess);
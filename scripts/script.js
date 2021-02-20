const q1_ans = document.querySelector('#Q1');

const submit_button = document.querySelector('#submit');

const display_result = document.querySelector('#result');

function checkGuess(){
    let userGuess = Number(q1_ans.value);
    if(userGuess === 70){
        display_result.textContent = "CORRECT!";
    }else{
        display_result.textContent = "INCORRECT!";
    }
}


submit_button.addEventListener('click', checkGuess);
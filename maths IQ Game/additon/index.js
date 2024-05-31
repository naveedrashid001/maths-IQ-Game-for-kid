const random1 = document.getElementById('random1');
const random2 = document.getElementById('random2');
const refresh = document.getElementById("refresh");
const next = document.getElementById("next");
const right = document.getElementById("right");
const wrong = document.getElementById("wrong");
const display =document.getElementById("display");

const showanswer = document.getElementById('showanswer');
const inputAnswer = document.getElementById('input-answer');
const submit = document.getElementById('submit');

// Generate random value function
function generaterandomvalue1() {
    return Math.floor(Math.random() * 100);
}
function generaterandomvalue2() {
    return Math.floor(Math.random() * 100);
}

// Add event listener for Refresh button
refresh.addEventListener("click", function () {
    random1.innerHTML = generaterandomvalue1();
    random2.innerHTML = generaterandomvalue2();
    right.classList.remove('btn-success');
    wrong.classList.remove('btn-danger');
    display.innerHTML="display Loading..."

});

// Add event listener for Submit button
submit.addEventListener("click", function () {
    // Get the input value inside the event listener
    const inputanswer = parseInt(inputAnswer.value);
   if (!isNaN(inputanswer)) {
        showanswer.innerHTML = inputanswer;
        const sum = parseInt(random1.innerHTML) + parseInt(random2.innerHTML);
        if (inputanswer === sum) {
            // If the answer is correct
            result[arr];
            right.classList.add('btn-success');
            wrong.classList.remove('btn-danger');
            display.innerHTML="wow! the answer is correct"
       } else {
            // If the answer is incorrect
            display.innerHTML="incorrect the answer is: "+sum;
            wrong.classList.add('btn-danger');
            right.classList.remove('btn-success');
        }
    } else {
        showanswer.innerHTML = '?';
    }
    inputAnswer.value = '';
    inputAnswer.placeholder = 'Enter your answer';
});
next.addEventListener("click", function () {
    // const random1Value = parseInt(random1.innerHTML);
    // const random2Value = parseInt(random2.innerHTML);
    const showresults = document.getElementById('showresults');
    let resultsHTML = '';

    for (let i = 0; i <= 200; i++) { // Loop through possible sums from 0 to 200
        const sum = parseInt(random1.innerHTML) + parseInt(random2.innerHTML)+ i; // Calculate the sum
        resultsHTML += `Sum: ${sum}<br>`;
    }

    showresults.innerHTML = resultsHTML;
});

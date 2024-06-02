const random1 = document.getElementById('random1');
const random2 = document.getElementById('random2');
const refresh = document.getElementById("refresh");
const right = document.getElementById("right");
const wrong = document.getElementById("wrong");
const showanswer = document.getElementById('showanswer');
const inputAnswer = document.getElementById('input-answer');
const submit = document.getElementById('submit');
const display = document.getElementById("display");
const close = document.getElementById("close");
const showresults = document.getElementById("showresults");
const SEERESULT = document.getElementById("SEE-RESULT")
const seepercentage = document.getElementById("SEE-percentage");
const showpercentage = document.getElementById('showpercentage');
const Level2btn = document.getElementById('Level-2');
const saycongrate = document.getElementById("saycongrate");
saycongrate.disabled = true;
Level2btn.disabled = true;


// Generate random value function
function generaterandomvalue1() {
    return Math.floor(Math.random() * 350);
}
function generaterandomvalue2() {
    return Math.floor(Math.random() * 350);
}
random1.innerHTML = generaterandomvalue1();
random2.innerHTML = generaterandomvalue2();

// Initialize a counter for the refresh button clicks
let refreshCounter = 0;
const maxClicks = 20;

refresh.addEventListener("click", function () {
    // Check if the click limit has been reached
    if (refreshCounter < maxClicks) {
        random1.innerHTML = generaterandomvalue1();
        random2.innerHTML = generaterandomvalue2();
        right.classList.remove('btn-success');
        wrong.classList.remove('btn-danger');
        display.innerHTML = "display Loading...";
        showanswer.innerHTML = "?";

        // Increment the counter
        refreshCounter++;
    } else {
        // Disable the refresh button if the click limit is reached
        refresh.disabled = true;
        display.innerHTML = "You have reached the maximum number of refreshes.";
    }
});

// Add event listener for Submit button
const results = [];

submit.addEventListener("click", function () {
    const inputanswer = parseInt(inputAnswer.value);
    if (!isNaN(inputanswer)) {
        showanswer.innerHTML = inputanswer;
        const sum = parseInt(random1.innerHTML) - parseInt(random2.innerHTML);
        if (inputanswer === sum) {
            // Add the correct answer to the results array
            results.push({ input: inputanswer, isCorrect: true });

            right.classList.add('btn-success');
            wrong.classList.remove('btn-danger');
            display.innerHTML = "Wow! The answer is correct.";
        } else {
            // Add the incorrect answer to the results array
            results.push({ input: inputanswer, isCorrect: false });

            display.innerHTML = "Incorrect. The answer is: " + sum;
            wrong.classList.add('btn-danger');
            right.classList.remove('btn-success');
        }
    } else {
        showanswer.innerHTML = '?';
    }
    inputAnswer.value = '';
    inputAnswer.placeholder = 'Enter your answer';
});

// Add click event listener to "amalnama" button
SEERESULT.addEventListener("click", function () {
    showresuts.innerHTML = results.map(result => `<li class:"p-3"; style="text-decoration: none;  padding-left: 20px; list-style-type:none; margin-top: 10px;">Input: ${result.input},Correct:  ${result.isCorrect ? 'Yes' : 'No'}</li>`).join('');
});

seepercentage.addEventListener("click", function () {
    const totalAttempts = results.length;
    const correctAttempts = results.filter(result => result.isCorrect).length;
    const percentageCorrect = totalAttempts > 0 ? (correctAttempts / totalAttempts) * 100 : 0;
    if (totalAttempts >7 && percentageCorrect > 79) {
        Level2btn.disabled = false;
        saycongrate.disabled = false;
        saycongrate.innerHTML = "Congragulation You Win! "
    }
    showpercentage.innerHTML = `Correct Answers: ${correctAttempts}, Total Attempts: ${totalAttempts}, Percentage: ${percentageCorrect.toFixed(2)}%`;
});

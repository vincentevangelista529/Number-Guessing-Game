let secretNumber = Math.floor(Math.random() * 100 ) + 1
let attempts = 0;
let gameActive = true;

const lastHighScore = parseFloat(localStorage.score);

let bestScore = localStorage.getItem('bestScore');

if (bestScore) {
  document.getElementById("bestScore").textContent = `Best Score: ${bestScore}`
}
console.log(secretNumber);

document.getElementById("guess-btn").addEventListener("click", function() {
  if(!gameActive) return;
  let guess = Number(document.getElementById("guess-input").value);


 const result = document.getElementById("feedback");

if(guess === secretNumber) {
    let finalAttempts = attempts + 1; 
  result.innerHTML = `You got it in ${attempts +1} attempts!`;
  if(!bestScore || finalAttempts < Number (bestScore)){
    localStorage.setItem('bestScore', finalAttempts);
    document.getElementById("bestScore").textContent = `Best Score: ${finalAttempts}`
  }
  gameActive = false;
  document.getElementById("restart-btn").style.display = "block";
} else if(guess > secretNumber) {
  result.innerHTML = "Too high!";
} else {
  result.innerHTML = "Too low!";
}

  const attempt = document.getElementById("attemptCounter" );
  attempts++;

  attempt.innerHTML = `Attempts: ${attempts}`

})


document.getElementById("restart-btn").addEventListener("click", function(){

  location.reload();
})
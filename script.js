let secretNumber = Math.floor(Math.random() * 100 ) + 1
let attempts = 0;
let gameActive = true;

console.log(secretNumber);

document.getElementById("guess-btn").addEventListener("click", function() {
  if(!gameActive) return;
  let guess = Number(document.getElementById("guess-input").value);


 const result = document.getElementById("feedback");

if(guess === secretNumber) {
  result.innerHTML = `You got it in ${attempts +1} attempts!`;
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
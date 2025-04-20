
let count = 10;
let countdown;

function startCountdown() {
  count = 10; // Reset the count
  document.getElementById("count").textContent = count;

  if (countdown) clearInterval(countdown); // clear any previous countdown

  countdown = setInterval(() => {
    count--;
    document.getElementById("count").textContent = count >= 0 ? count : "Time's up!";

    if (count < 0) {
      clearInterval(countdown);
    }
  }, 1000);
}
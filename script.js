console.log('JS Loaded Successfully!');

// Timer and 100ms to delay at seconds
const clockDelay = setInterval(clockCountdown, 1000)

const clockOutputDays = document.getElementById('clockOutputDays');
const clockOutputHours = document.getElementById('clockOutputHours');
const clockOutputMinutes = document.getElementById('clockOutputMinutes');
const clockOutputSeconds = document.getElementById('clockOutputSeconds');
const clockOutputGoal = document.getElementById('countdownGoalContainer');

// Message Output Section
const clockGoalOutput = document.getElementById('clockGoalOutput');
const messageOutput = 'E ora di iniziare la lezione!';

function clockCountdown () {

    // => Get today's date and time
    const actualTime = new Date().getTime();
    // => Set the date we're counting down to
    const countdownGoal =  new Date("May 26, 2023 09:30:00").getTime();
    // => Find the distance between now and the count down date
    const distance = countdownGoal - actualTime;
    // => Remove the digits display
    const countdownItems = document.querySelectorAll('.countdown-item');

    // => Console Log Time stamp to Desired Date Distance
    console.log(convertMsToTime(distance));

    // => Instruction when countdown reaches 0
    if (distance < 500) {
        clearInterval(clockDelay);
        console.log(messageOutput);
        clockOutputGoal.style.display = 'flex';
        clockGoalOutput.textContent = messageOutput;

        countdownItems.forEach(function(item) {
          item.style.display = 'none';
        });
    }
}
  
function convertMsToTime(milliseconds) {
  let seconds = Math.floor(milliseconds / 1000);
  let minutes = Math.floor(seconds / 60);
  let hours = Math.floor(minutes / 60);
  let days = Math.floor(hours / 24);

  seconds = seconds % 60;
  minutes = minutes % 60;
  hours = hours % 24;

  // Update the countdown digits with the calculated values
  clockOutputDays.textContent = padTo2Digits(days);
  clockOutputHours.textContent = padTo2Digits(hours);
  clockOutputMinutes.textContent = padTo2Digits(minutes);
  clockOutputSeconds.textContent = padTo2Digits(seconds);

  // NOTE: In this code, the values are calculated by 
  // dividing the distance by the respective unit in 
  // milliseconds and using the remainder (%) operator 
  // to extract the remaining time for the smaller units.

  return `${padTo2Digits(days)}d:${padTo2Digits(hours)}h:${padTo2Digits(minutes)}m:${padTo2Digits(
    seconds,
  )}s`;
}

function padTo2Digits(num) {
  return num.toString().padStart(2, '0');
}
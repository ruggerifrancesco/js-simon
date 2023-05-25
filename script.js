console.log('JS Loaded Successfully!');

const clockOuput = document.getElementById('clock-Output');

// => Test Time Stamp
// const t = new Date().getTime();
// console.log(t);
clockCountdown()

function clockCountdown (outputID) {

    // => Get today's date and time
    const actualTime = new Date().getTime();
    // => Set the date we're counting down to
    const countdownGoal =  new Date("May 27, 2023 09:30:00").getTime();
    // => Find the distance between now and the count down date
    const distance = countdownGoal - actualTime;

    // => Console Log Time stamp to Desired Date Distance
    console.log(convertMsToTime(distance))
}

function padTo2Digits(num) {
    return num.toString().padStart(2, '0');
  }
  
  function convertMsToTime(milliseconds) {
    let seconds = Math.floor(milliseconds / 1000);
    let minutes = Math.floor(seconds / 60);
    let hours = Math.floor(minutes / 60);
  
    seconds = seconds % 60;
    minutes = minutes % 60;
    hours = hours % 24;

    // NOTE: In this code, the values are calculated by 
    // dividing the distance by the respective unit in 
    // milliseconds and using the remainder (%) operator 
    // to extract the remaining time for the smaller units.
  
    return `${padTo2Digits(hours)}:${padTo2Digits(minutes)}:${padTo2Digits(
      seconds,
    )}`;
  }
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
    const countdownGoal =  new Date("May 26, 2023 09:30:00").getTime();
    // => Find the distance between now and the count down date
    const distance = countdownGoal - actualTime;

    // Calculate the values
    const days = Math.floor(distance % (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    const milliseconds = Math.floor(distance % 1000);

    // NOTE: In this code, the values are calculated by 
    // dividing the distance by the respective unit in 
    // milliseconds and using the remainder (%) operator 
    // to extract the remaining time for the smaller units.

    // => Console Log Time stamp to Desired Date Distance
    // console.log(distance)
    console.log(`${days}d, ${hours}h, ${minutes}m, ${seconds}s, ${milliseconds}ms`)
}
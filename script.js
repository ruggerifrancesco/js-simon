console.log('JS Loaded Successfully!');

const clockOuput = document.getElementById('clock-Output');

// => Test Time Stamp
const t = new Date().getTime();
console.log(t);

clockCountdown()

function clockCountdown (outputID) {

    const months = 00;
    const days = 00;
    const hours = 00;
    const minutes = 00;
    const seconds = 00;
    const mseconds = 00;

    // => Get today's date and time
    const actualTime = new Date().getTime();
    // => Set the date we're counting down to
    const countdownGoal =  new Date("May 26, 2023 09:30:00").getTime();

}
const secondHand = document.querySelector('.second-hand');
const minHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');
const clock = document.querySelector('.clock-face');

function setDate() {
  const now = new Date();
  const seconds = now.getSeconds(); // gets us the seconds of the current MINUTE
  const mins = now.getMinutes();
  const hours = now.getHours();

  const secondsDegrees = ((seconds / 60) * 360) + 90; // converting to circlular syntax
  const minutesDegrees = ((mins / 60) * 360) + 90;
  const hoursDegrees = ((hours / 12) * 360) + 90;
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
  minHand.style.transform = `rotate(${minutesDegrees}deg)`;
  hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
  
  // Work on this part
  
  function displayTime() {
    const clock = document.querySelector('.clock');
    clock.html.add('This is the time');
  }
};



setInterval(setDate, 1000);
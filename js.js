/*
// start with empty clock, otherwise looks weird
function insertHands() {
  const clock = document.querySelector('.clock-face');
  const divSeconds = document.createElement('div');
  divSeconds.className = 'hand second-hand';
  clock.appendChild(divSeconds);
}
*/
const secondsHand = document.querySelector('.second-hand');
const minutesHand = document.querySelector('.min-hand');
const hoursHand = document.querySelector('.hour-hand');

function setDate() {
  const now = new Date();
  // move seconds hand
  const nowSeconds = now.getSeconds();
  const nowSecondsDegrees = ((nowSeconds/60) * 360) + 90;
  // console.log(nowSeconds);
  secondsHand.style.transform = `rotate(${nowSecondsDegrees}deg)`;

  // move minutes hands
  const nowMinutes = now.getMinutes();
  const nowMinutesDegrees = ((nowMinutes/60) * 360) + 90;

  // console.log(nowMinutes);
  minutesHand.style.transform = `rotate(${nowMinutesDegrees}deg)`;

  // move hours hands
  const nowHours = now.getHours();
  const nowHoursDegrees = ((nowHours/12) * 360) + 90;
  // console.log(nowHours);
  hoursHand.style.transform = `rotate(${nowHoursDegrees}deg)`;
}

setInterval(setDate, 1000);

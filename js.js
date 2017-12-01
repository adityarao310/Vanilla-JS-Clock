/*
// start with empty clock, otherwise looks weird
function insertHands() {
  const clock = document.querySelector('.clock-face');
  const divSeconds = document.createElement('div');
  divSeconds.className = 'hand second-hand';
  clock.appendChild(divSeconds);
}
*/

function setDate() {
  const now = new Date();
  // move seconds hand
  const nowSeconds = now.getSeconds();
  const nowSecondsDegrees = ((nowSeconds/60) * 360) + 90;
  const secondsHand = document.querySelector('.second-hand');
  // console.log(nowSeconds);
  secondsHand.style.transform = `rotate(${nowSecondsDegrees}deg)`;

  // move minutes hands
  const nowMinutes = now.getMinutes();
  const nowMinutesDegrees = ((nowMinutes/60) * 360) + 90;
  const minutesHand = document.querySelector('.min-hand');
  // console.log(nowMinutes);
  minutesHand.style.transform = `rotate(${nowMinutesDegrees}deg)`;

  // move hours hands
  const nowHours = now.getHours();
  const nowHoursDegrees = ((nowHours/12) * 360) + 90;
  const hoursHand = document.querySelector('.hour-hand');
  // console.log(nowHours);
  hoursHand.style.transform = `rotate(${nowHoursDegrees}deg)`;
}

setInterval(setDate, 1000);

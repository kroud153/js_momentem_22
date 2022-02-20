const clockTitle = document.querySelector(".js-clock");

let now, christmas, dDay;
let day, hours, min, sec;
let choseMon = 12;
let choseDay = 25;
// console.log(christmas.getMonth());
// console.log(dDay);

function timenow() {
  setTimeout(() => {
  now = new Date();
  clockTitle.innerHTML = `${now.getMonth()}월 ${now.getDate()}일 
  <br> ${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`;
  timenow();
  }, 1000);
  
}

let timerId;
function timer() {
  timerId = setTimeout(function () {
    now = new Date();
    christmas = new Date(2022, choseMon - 1, choseDay);
    dDay = christmas.getTime() - now.getTime();
    //dDay = (dDay * 10 - 1) / 10;
    day = Math.floor(dDay / (1000 * 24 * 60 * 60));
    hours = Math.floor(dDay % (1000 * 24 * 60 * 60) / (1000 * 60 * 60));
    min = Math.floor((dDay % (1000 * 60 * 60)) / (1000 * 60));
    sec = Math.floor((dDay / 1000) % 60);
    //clockTitle.textContent = `${day}d ${hours}h ${min}m ${sec}s 남았습니다!`;
    if (dDay <= 0) {
      dDay = 0;
      clearInterval(timerId);
      clockTitle.textContent = `00d 00h 00m 00s`;
      alert("Dday! 입니다");
    } else {
      timer();
    }
  }, 1000);
}

timer();
timenow();
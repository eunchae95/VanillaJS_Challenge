const clock = document.querySelector("h2#clock");

//2021.08.04 
// 21:26:12
function getClock(){
    const date = new Date();
    const week = new Array('SUN','MON','TUE','WED','THU','FRI','SAT');
    const year = date.getFullYear();
    const month = date.getMonth()+1;
    const day = date.getDate();
    const dayName = week[date.getDay()];
    const hours = String(date.getHours()).padStart(2,"0");
    const minutes = String(date.getMinutes()).padStart(2,"0");
    const seconds = String(date.getSeconds()).padStart(2,"0");
    clock.innerHTML = `<String>${year}.${month}.${day} &nbsp${dayName}</String>
    <br>${hours}:${minutes}:${seconds}</br>`;
}

getClock();
setInterval(getClock,1000);
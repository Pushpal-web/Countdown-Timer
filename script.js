const days = document.getElementById('days');
const hours = document.getElementById('hours');
const mins = document.getElementById('mins');
const secs = document.getElementById('secs');

const formatTime = (time) => {
    return time < 10 ? `0${time}` : time;
}

const updateCountDown = (deadline) => {
    const currentTime = new Date();
    const timeDifference = deadline - currentTime; //miliseconds

    //Calculating days, hours, mins, secs from timeDifference
    let calSecs = Math.floor(timeDifference/1000) % 60;
    let calmins = Math.floor(timeDifference/1000/60) % 60;
    let calhours = Math.floor(timeDifference/1000/60/60) % 24;
    let calcdays = Math.floor(timeDifference/1000/60/60/24);

    days.textContent = formatTime(calcdays);
    mins.textContent = formatTime(calmins);
    hours.textContent = formatTime(calhours);
    secs.textContent = formatTime(calSecs);
}

const countDown = (targetDate) => {
    setInterval(() => updateCountDown(targetDate), 1000);
}

const targetDate = new Date("January 01 2025 00:00");
countDown(targetDate);
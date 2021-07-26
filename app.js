daysEle = document.getElementById("days");
hoursEle = document.getElementById("hours");
minEle = document.getElementById('mins');
secEle = document.getElementById('secs');


function countdown() {
    const user_event = document.getElementById("user_event").value;
    const user_choice = document.getElementById("user_date").value;
    const target = user_choice;
    const target_date = new Date(target);
    const today = new Date();
    const totalSeconds = (target_date - today) / 1000;
    if (totalSeconds < 0) {
        const days = 0
        const hours = 0
        const minutes = 0
        const seconds = 0
        daysEle.innerText = days;
        hoursEle.innerHTML = formatTime(hours);
        minEle.innerHTML = formatTime(minutes);
        secEle.innerHTML = formatTime(seconds);
        head = document.getElementById('Title');
        head.innerHTML = 'Invalid';
    }
    else{
        head = document.getElementById('Title');
        head.innerHTML = user_event;
        const days = Math.floor(totalSeconds / 3600 / 24);
        const hours = Math.floor(totalSeconds / 3600 % 24);
        const minutes = Math.floor(totalSeconds / 60 % 60);
        const seconds = Math.floor(totalSeconds) % 60;


        daysEle.innerText = days;
        hoursEle.innerHTML = formatTime(hours);
        minEle.innerHTML = formatTime(minutes);
        secEle.innerHTML = formatTime(seconds);
    }
}

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}

countdown();
setInterval(countdown, 1000);
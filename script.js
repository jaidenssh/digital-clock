const hoursDisplay = document.getElementById('hours');
const minutesDisplay = document.getElementById('minutes');
const secondsDisplay = document.getElementById('seconds');
const periodDisplay = document.getElementById('period');
const dateDisplay = document.getElementById('date');
const greetingDisplay = document.getElementById('greeting');
const toggleButton = document.getElementById('toggle-format');

let is24HourFormat = false;

function updateClock() {
    const now = new Date();
    let hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    let period = '';

    if (!is24HourFormat) {
        period = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12 || 12; 
        periodDisplay.textContent = period;
        periodDisplay.style.display = 'block'; 
    } else {
        periodDisplay.textContent = '';
        periodDisplay.style.display = 'none'; 
    }

   
    hoursDisplay.textContent = String(hours).padStart(2, '0');
    minutesDisplay.textContent = String(minutes).padStart(2, '0');
    secondsDisplay.textContent = String(seconds).padStart(2, '0');

    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    dateDisplay.textContent = now.toLocaleDateString(undefined, options);

    
    const greetings = now.getHours() < 12 ? 'Good Morning' : (now.getHours() < 17 ? 'Good Afternoon' : 'Good Evening');
    greetingDisplay.textContent = greetings;
}

function toggleFormat() {
    is24HourFormat = !is24HourFormat;
    toggleButton.textContent = is24HourFormat ? 'Switch to 12-hour format' : 'Switch to 24-hour format';
    updateClock(); 
}

setInterval(updateClock, 1000);

toggleButton.addEventListener('click', toggleFormat);

updateClock();

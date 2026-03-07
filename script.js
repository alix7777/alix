let totalSeconds = 24 * 60 * 60;

function updateTimer() {
    let hours = Math.floor(totalSeconds / 3600);
    let minutes = Math.floor((totalSeconds % 3600) / 60);
    let seconds = totalSeconds % 60;

    hours = String(hours).padStart(2, '0');
    minutes = String(minutes).padStart(2, '0');
    seconds = String(seconds).padStart(2, '0');

    document.getElementById("timer").textContent = 
        `${hours} часов ${minutes} минут ${seconds} секунд`;

    if (totalSeconds > 0) {
        totalSeconds--;
    } else {
        clearInterval(interval);
        alert("Время вышло!");
    }
}

let interval = setInterval(updateTimer, 1000);
updateTimer();

const blocks = document.querySelectorAll('.block');
let index = 0;

function showNextBlock() {
    blocks[index].classList.remove('active');
    index = (index + 1) % blocks.length;
    blocks[index].classList.add('active');
}

blocks[index].classList.add('active');
setInterval(showNextBlock, 5000);

const popUp = document.getElementById('popUp')
popUp.onclick = () => popUp.style.display = 'none'
export const timer = () => {

    const time = document.querySelector('.time');
    const timerElem = time.querySelector('.text');
    const button = document.querySelectorAll('.button')[0];
    let seconds = 0;
    let minutes = 0;
    let timerId;

    const updateTime = () => {
        seconds++;
        if (seconds == 60) {
            minutes++;
            seconds = 0;
        }

        let timerText = (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") + ":" +
            (seconds > 9 ? seconds : "0" + seconds);
        timerElem.innerHTML = timerText;

        timerId = setTimeout(updateTime, 1000);
    };

    updateTime();

    const toggleTimer = () => {
        if (timerId) {
            clearTimeout(timerId);
            timerId = null;
        } else {
            updateTime();
        }
    }

    button.addEventListener('click', toggleTimer);
};
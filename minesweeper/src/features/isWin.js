import win from '../audio/win.mp3';

export const isWin = (matrix, bombCount, countMove) => {

    const rows = matrix.length;
    const cols = matrix[0].length;
    const countWinCells = rows * cols - bombCount;
    const gameOverMessage = document.querySelector('.gameover-message');
    const buttonSound = document.querySelector('.sound');
    let count = 0;
    const container = document.querySelector('.container')
    const childNodes = container.childNodes;
    const childrenArray = [...childNodes];
    const timeElem = document.querySelector('.time');
    const time = timeElem.querySelector('.text').innerHTML;
    const substrings = time.split(':');
    let min = 0;

    if (substrings[0] > 0) {
        min = substrings[0] * 60;
    }

    const sum = Number(min) + Number(substrings[1]);
    const audioWin = new Audio(win);

    childrenArray.forEach((elem) => {
        if (elem.classList.contains('cell-open')) {
            count++;
        }
    })
    console.log('win', count, countWinCells);

    if (count === countWinCells) {

        gameOverMessage.classList.add('gameover-message-active');
        gameOverMessage.innerText = `Hooray! You found all mines in ${sum} seconds and ${countMove} moves!`;
        if (!(buttonSound.hasAttribute('data-sound-on') && buttonSound.getAttribute('data-sound-on') === 'false')) {
            audioWin.play();
        }
        localStorage.setItem(`${sum}`, `${countMove}`);
    }

    return `${sum} , ${countMove}`;
};
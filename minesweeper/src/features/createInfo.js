import { iconClock } from "../icons/iconClock";
import { iconStep } from "../icons/iconStep";
import { iconStop } from "../icons/iconStop";
import { iconRestart } from "../icons/iconRestart";

const createInfo = () => {
    const contentWrapper = document.querySelector('.content-wrapper')

    const info = document.createElement('div');
    info.classList.add('info');
    contentWrapper.appendChild(info);

    const scoreBoard = document.createElement('div');
    info.appendChild(scoreBoard);

    const time = document.createElement('div');
    time.classList.add('time');
    scoreBoard.appendChild(time);

    time.innerHTML = iconClock;

    const timeText = document.createElement('span');
    timeText.classList.add('text');
    time.appendChild(timeText);
    timeText.innerText = '00:00';

    const move = document.createElement('div');
    move.classList.add('move');
    scoreBoard.appendChild(move);

    move.innerHTML = iconStep;

    const moveText = document.createElement('span');
    moveText.classList.add('text');
    move.appendChild(moveText);
    moveText.innerText = '0';

    const loseMessage = document.createElement('span');
    loseMessage.classList.add('lose-message');
    info.appendChild(loseMessage);
    loseMessage.innerText = 'Game over. Try again!';

    const gameButtons = document.createElement('div');
    info.appendChild(gameButtons);

    const buttons = document.createElement('div');
    buttons.classList.add('buttons')
    gameButtons.appendChild(buttons);

    const buttonStop = document.createElement('button');
    buttonStop.classList.add('button');
    buttons.appendChild(buttonStop);

    buttonStop.innerHTML = iconStop;

    const buttonRestart = document.createElement('button');
    buttonRestart.classList.add('button');
    buttons.appendChild(buttonRestart);

    buttonRestart.innerHTML = iconRestart;

    const chooseLevel = document.createElement('button');
    chooseLevel.classList.add('choose-level');
    gameButtons.appendChild(chooseLevel);
    chooseLevel.innerText = 'Choose a level'
};

export default createInfo;
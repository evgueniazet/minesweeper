import { iconClock } from "../icons/iconClock";
import { iconStep } from "../icons/iconStep";
import { iconStop } from "../icons/iconStop";
import { iconRestart } from "../icons/iconRestart";
import { createElement } from './createElement.js';
import { soundOn } from '../icons/soundOn';

const createInfo = () => {
    const contentWrapper = document.querySelector('.content-wrapper')

    const info = createElement('div', 'info');
    contentWrapper.appendChild(info);

    const scoreBoard = document.createElement('div');
    info.appendChild(scoreBoard);

    const time = createElement('div', 'time');
    scoreBoard.appendChild(time);

    time.innerHTML = iconClock;

    const timeText = createElement('span', 'text');
    time.appendChild(timeText);
    timeText.innerText = '00:00';

    const move = createElement('div', 'move');
    scoreBoard.appendChild(move);

    move.innerHTML = iconStep;

    const moveText = createElement('span', 'text');
    move.appendChild(moveText);
    moveText.innerText = '0';

    const loseMessage = createElement('span', 'lose-message');
    info.appendChild(loseMessage);
    loseMessage.innerText = 'Game over. Try again!';

    const gameButtons = document.createElement('div');
    info.appendChild(gameButtons);

    const buttons = createElement('div', 'buttons');
    gameButtons.appendChild(buttons);

    const buttonStop = createElement('button', 'button');
    buttons.appendChild(buttonStop);

    buttonStop.innerHTML = iconStop;

    const buttonRestart = createElement('button', 'button');
    buttons.appendChild(buttonRestart);

    buttonRestart.innerHTML = iconRestart;

    const sound = createElement('button', 'sound');
    buttons.appendChild(sound);

    sound.innerHTML = soundOn;

    const chooseLevel = createElement('button', 'choose-level');
    gameButtons.appendChild(chooseLevel);
    chooseLevel.innerText = 'Choose a level'
};

export default createInfo;
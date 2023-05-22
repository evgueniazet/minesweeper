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

    const infoWrapper = createElement('div', 'info-wrapper');
    info.appendChild(infoWrapper);

    const scoreBoard = document.createElement('div');
    infoWrapper.appendChild(scoreBoard);

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

    const bombs = createElement('div', 'bombs');
    scoreBoard.appendChild(bombs);

    const bombsText = createElement('span', 'bombs-text');
    bombs.appendChild(bombsText);
    bombsText.innerHTML = 'Bombs: ';

    const bombsCount = createElement('span', 'bombs-count');
    bombs.appendChild(bombsCount);
    bombsCount.innerHTML = '10';


    const gameOverMessage = createElement('span', 'gameover-message');
    infoWrapper.appendChild(gameOverMessage);

    const gameButtons = document.createElement('div');
    infoWrapper.appendChild(gameButtons);

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
import { bombIcon } from "../icons/bombIcon";
import gameOver from '../audio/gameOver.mp3';

export const openBomb = (cell) => {
    const audioLose = new Audio(gameOver);
    const buttonSound = document.querySelector('.sound');
    const container = document.querySelector('.container');
    cell.innerHTML = bombIcon;

    container.classList.add('container-blocked');

    if (!(buttonSound.hasAttribute('data-sound-on') && buttonSound.getAttribute('data-sound-on') === 'false')) {
        audioLose.play();
    }

    const loseMessage = document.querySelector('.gameover-message');
    cell.classList.remove('cell-open');
    loseMessage.classList.add('gameover-message-active');
    loseMessage.innerText = 'Game over. Try again!';
    return true;
};
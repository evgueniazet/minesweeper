import { bombIcon } from "../icons/bombIcon";
import gameOver from '../audio/gameOver.mp3';

export const openBomb = (cell) => {
    const audioLose = new Audio(gameOver);

    cell.innerHTML = bombIcon;
    // audioLose.play();
    const loseMessage = document.querySelector('.lose-message');
    cell.classList.remove('cell-open');
    loseMessage.classList.add('lose-message-active');
};
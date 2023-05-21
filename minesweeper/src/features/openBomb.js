import { bombIcon } from "../icons/bombIcon";
import gameOver from '../audio/gameOver.mp3';

export const openBomb = (cell) => {
    const audioLose = new Audio(gameOver);
    cell.innerHTML = bombIcon;
    audioLose.play();
    const loseMessage = document.querySelector('.gameover-message');
    cell.classList.remove('cell-open');
    loseMessage.classList.add('gameover-message-active');
    loseMessage.innerText = 'Game over. Try again!';
};
import { iconFlag } from "../icons/iconFlag";
import { bombIcon } from "../icons/bombIcon";
import gameOver from '../audio/gameOver.mp3';
import click from '../audio/click.mp3';

const handleCell = () => {

    const cells = document.querySelectorAll('.cell');
    const audioLose = new Audio(gameOver);
    const gameClick = new Audio(click);

    cells.forEach((cell) => {

        let isFlag = false;

        cell.addEventListener('click', () => {
            if (cell.hasAttribute('data-is-lose')) {
                cell.innerHTML = bombIcon;
                audioLose.play();
                const loseMessage = document.querySelector('.lose-message');
                loseMessage.classList.add('lose-message-active');
            }
        })

        cell.addEventListener('contextmenu', (e) => {
            e.preventDefault();

            if (!isFlag) {
                cell.innerHTML = iconFlag;
                gameClick.play();
                isFlag = true;
            } else {
                const icon = cell.querySelector('.icon');
                cell.removeChild(icon);
                gameClick.play();
                isFlag = false;
            }
        })
    })
};

export default handleCell;
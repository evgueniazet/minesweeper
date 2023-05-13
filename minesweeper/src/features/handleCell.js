import { iconLose } from "../icons/iconLose";
import { iconFlag } from "../icons/iconFlag";
import gameOver from '../audio/gameOver.mp3';

const handleCell = () => {

    const cells = document.querySelectorAll('.cell');
    const audioLose = new Audio(gameOver);

    cells.forEach((cell) => {

        let isFlag = false;

        cell.addEventListener('click', () => {
            if (cell.hasAttribute('data-is-lose')) {
                cell.innerHTML = iconLose;
                audioLose.play();
                const loseMessage = document.querySelector('.lose-message');
                loseMessage.classList.add('lose-message-active');
            }
        })

        cell.addEventListener('contextmenu', (e) => {
            e.preventDefault();

            if (!isFlag) {
                cell.innerHTML = iconFlag;
                isFlag = true;
            } else {
                const icon = cell.querySelector('.icon');
                cell.removeChild(icon);
                isFlag = false;
            }
        })
    })
};

export default handleCell;
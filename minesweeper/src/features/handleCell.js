import { iconFlag } from "../icons/iconFlag";
import click from '../audio/click.mp3';
import { getNeighbors } from "./getNeighbours";
import { openBomb } from "./openBomb";
import { changeSoundButton } from "./changeSoundButton";

const handleCell = (matrix) => {

    const flattenedArray = matrix.flat();
    const cells = document.querySelectorAll('.cell');
    const gameClick = new Audio(click);
    const buttonSound = document.querySelector('.sound');
    // const buttonSoundTitle = buttonSound.querySelector('title');

    let isBombOpen = false;

    cells.forEach((cell, i) => {
        let isFlag = false;

        const handleCellClick = () => {

            gameClick.play();

            cell.classList.add('cell-open')
            if (cell.hasAttribute('data-is-lose')) {
                openBomb(cell);
            } else {
                const result = getNeighbors(matrix, i);

                flattenedArray.forEach((element, index) => {

                    if (i === index && element !== 0) {
                        cell.innerHTML = element;
                    }

                    result.forEach((el) => {
                        if (index === el && element !== 0 && element !== -1) {
                            cells[el].innerHTML = element;
                            cells[el].classList.add('cell-open');
                        } else if (index === el && element === -1) {
                            isBombOpen = true;
                            openBomb(cells[index]);
                        }
                    })
                })

                if (isBombOpen) {
                    cells.forEach((cell) => {
                        cell.disabled = true;
                    })
                }
            }
        }

        cell.addEventListener('click', handleCellClick);

        cell.addEventListener('contextmenu', (e) => {
            e.preventDefault();

            if (!isFlag) {
                cell.innerHTML = iconFlag;
                gameClick.play();
                isFlag = true;
            } else {
                const icon = cell.querySelector('.icon');
                cell.removeChild(icon);
                // if (buttonSoundTitle.innerHTML === 'sound-on') {
                //     gameClick.play();
                // }
                gameClick.play();
                isFlag = false;
            }
        })

    })

    changeSoundButton();

    buttonSound.addEventListener('click', () => {
        gameClick.muted = !gameClick.muted;
    })


};

export default handleCell;
import { iconFlag } from "../icons/iconFlag";
import click from '../audio/click.mp3';
import { openBomb } from "./openBomb";
import { changeSoundButton } from "./changeSoundButton";
import { changeMove } from "./changeMove";
import { createMinesweeperField } from './createMinesweeperField';
import { renderCell } from "./renderCell";
import { removeChildren } from "./removeChildren";
import { getEmptyCellArr } from "./getEmptyCellArr";
import { openCells } from "./openCells";
import { isWin } from "./isWin";

const handleCell = (matrix) => {

    const gameClick = new Audio(click);
    const buttonSound = document.querySelector('.sound');
    const container = document.querySelector('.container');

    let count = 0;
    let bombCount = 10;
    let isCellOpen = false;
    let newMatrix;

    const handleCellClick = (e) => {

        const targetCell = e.target;
        const cellIndex = [...targetCell.parentNode.children].indexOf(targetCell);

        if (!isCellOpen) {

            if (targetCell.classList.contains('cell')) {
                removeChildren(container);
                newMatrix = createMinesweeperField(matrix, bombCount, cellIndex);
                renderCell(newMatrix, container);
            }

            isCellOpen = true;
        }

        count++;
        changeMove(count);
        gameClick.play();

        targetCell.classList.add('cell-open');

        const attributeValue = targetCell.getAttribute('data-number');

        if (targetCell.hasAttribute('data-is-lose')) {
            openBomb(targetCell);
        } else if (attributeValue === '0') {
            const emptyCellArr = getEmptyCellArr(cellIndex, newMatrix);
            openCells(emptyCellArr, container);
        } else {
            if (attributeValue === '1') {
                targetCell.classList.add('cell-open-one');
                targetCell.innerHTML = '1';
            }

            if (attributeValue === '2') {
                targetCell.classList.add('cell-open-three');
                targetCell.innerHTML = '2';
            }

            if (attributeValue === '3') {
                targetCell.classList.add('cell-open-two');
                targetCell.innerHTML = '3';
            }
        }
        isWin(newMatrix, bombCount, count);
    }
    container.addEventListener('click', handleCellClick);

    changeSoundButton();

    buttonSound.addEventListener('click', () => {
        gameClick.muted = !gameClick.muted;
    })
};

export default handleCell;
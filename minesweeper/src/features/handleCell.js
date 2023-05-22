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
import { getOpenCellsArr } from "./getOpenCellsArr";

const handleCell = (matrix) => {

    const gameClick = new Audio(click);
    const buttonSound = document.querySelector('.sound');
    const container = document.querySelector('.container');
    const cells = document.querySelectorAll('.cell');
    const bombsCount = document.querySelector('.bombs-count');

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
            getOpenCellsArr(emptyCellArr, newMatrix);

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

    cells.forEach((cell) => {
        cell.addEventListener('contextmenu', (e) => {
            e.preventDefault();

            const icon = cell.querySelector('.icon');
            const isFlag = cell.getAttribute('data-flag') === 'true';

            if (bombsCount.innerHTML > 0) {

                if (!isFlag) {
                    cell.innerHTML = iconFlag;
                    cell.setAttribute('data-flag', 'true');
                    bombsCount.innerHTML = bombsCount.innerHTML - 1;
                    console.log('bombcount', bombCount);
                } else {
                    if (icon) {
                        cell.removeChild(icon);
                        cell.setAttribute('data-flag', 'false');
                    }
                }
            }

        });
    });

    changeSoundButton();

    buttonSound.addEventListener('click', () => {
        gameClick.muted = !gameClick.muted;
    })
};

export default handleCell;
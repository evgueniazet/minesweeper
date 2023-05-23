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
import { getNeighbours } from "./getNeighbours";
import { createMatrix } from "./createMatrix";
import { toggleTheme } from "./toggleTheme";

const handleCell = (matrix) => {

    const gameClick = new Audio(click);
    const buttonSound = document.querySelector('.sound');
    const container = document.querySelector('.container');
    const bombsCount = document.querySelector('.bombs-count');
    const buttonRestart = document.querySelectorAll('.button')[1];
    const gameOverMessage = document.querySelector('.gameover-message');

    let count = 0;
    let bombCount = 10;
    let isCellOpen = false;
    let newMatrix;


    const handleCellClick = (e) => {

        const targetCell = e.target;
        const cellIndex = [...targetCell.parentNode.children].indexOf(targetCell);


        if (targetCell.classList.contains('cell')) {

            if (!isCellOpen) {
                removeChildren(container);
                newMatrix = createMinesweeperField(matrix, bombCount, cellIndex);
                renderCell(newMatrix, container);
                toggleTheme(container);
            }

            isCellOpen = true;

            toggleTheme(container);

            count++;
            changeMove(count);
            gameClick.play();

            targetCell.classList.add('cell-open');

            const attributeValue = targetCell.getAttribute('data-number');

            if (targetCell.hasAttribute('data-is-lose')) {
                openBomb(targetCell);
            } else if (attributeValue === '0') {
                const emptyCellArr = getEmptyCellArr(cellIndex, newMatrix);
                const openCellArr = getOpenCellsArr(emptyCellArr, newMatrix);
                openCells(openCellArr, container, targetCell);
            } else {

                const attributeFlag = targetCell.hasAttribute('data-flag', 'true');

                if (attributeValue === '1' && !attributeFlag) {
                    targetCell.classList.add('cell-open-one');
                    targetCell.innerHTML = '1';
                }

                if (attributeValue === '2' && !attributeFlag) {
                    targetCell.classList.add('cell-open-three');
                    targetCell.innerHTML = '2';
                }

                if (attributeValue === '3' && !attributeFlag) {
                    targetCell.classList.add('cell-open-two');
                    targetCell.innerHTML = '3';
                }
            }
            isWin(newMatrix, bombCount, count);
        }
    }

    const handleContextMenu = (e) => {

        e.preventDefault();

        const targetCell = e.target.closest('.cell');

        if (targetCell && targetCell.classList.contains('cell') && targetCell.classList.length === 1) {
            if (bombsCount.innerHTML > 0) {
                const isFlag = targetCell.getAttribute('data-flag');

                if (isFlag !== 'true') {
                    targetCell.innerHTML = iconFlag;
                    targetCell.setAttribute('data-flag', 'true');
                    bombsCount.innerHTML = bombsCount.innerHTML - 1;
                } else {
                    const icon = targetCell.querySelector('.icon');
                    targetCell.removeChild(icon);
                    targetCell.removeAttribute('data-flag');
                    bombsCount.innerHTML = Number(bombsCount.innerHTML) + 1;
                }
            }
        }
    };

    container.addEventListener('contextmenu', handleContextMenu);


    container.addEventListener('click', handleCellClick);


    container.addEventListener("mousedown", (event) => {

        const childrenArray = Array.from(container.children);

        event.preventDefault();
        if (event.button === 2) {
            container.addEventListener("click", (e) => {

                const targetCell = e.target;
                const cellIndex = [...(targetCell.parentNode?.children || [])].indexOf(targetCell);

                const isNumberCell = (targetCell) => {
                    if (targetCell.classList.contains('cell-open-one') && targetCell.classList.contains('cell-open')) {
                        return true;
                    }

                    if (targetCell.classList.contains('cell-open-two') && targetCell.classList.contains('cell-open')) {
                        return true;
                    }

                    if (targetCell.classList.contains('cell-open-three') && targetCell.classList.contains('cell-open')) {
                        return true;
                    }
                }

                if (isNumberCell(targetCell)) {

                    const neighbours = getNeighbours(newMatrix, cellIndex);

                    let countBomb = 0;
                    let countFlag = 0;

                    childrenArray.forEach((elem, i) => {

                        const attributeValue = elem.getAttribute('data-number');

                        neighbours.forEach((item) => {
                            if (i === item && elem.hasAttribute('data-is-lose')) {
                                countBomb++;
                            }

                            if (i === item && elem.hasAttribute('data-flag', 'true')) {
                                countFlag++;
                            }

                            console.log('countFlag, countBomb', countFlag, countBomb);

                            if (countFlag === countBomb) {

                                if (item === i && attributeValue === '1') {
                                    elem.classList.add('cell-open');
                                    elem.classList.add('cell-open-one');
                                    elem.innerHTML = '1';
                                }

                                if (item === i && attributeValue === '2') {
                                    elem.classList.add('cell-open');
                                    elem.classList.add('cell-open-two');
                                    elem.innerHTML = '2';
                                }

                                if (item === i && attributeValue === '3') {
                                    elem.classList.add('cell-open');
                                    elem.classList.add('cell-open-three');
                                    elem.innerHTML = '3';
                                }

                                // if (item === i && elem.hasAttribute('data-is-lose') && !elem.hasAttribute('data-flag', 'true')) {
                                //     openBomb(elem);
                                // }

                                if (item === i && elem.hasAttribute('data-is-lose')) {
                                    openBomb(elem);
                                }
                            }
                        })
                    })


                }

            });
        }
    });

    changeSoundButton();

    const handleButtonRestart = () => {

        gameOverMessage.classList.remove('gameover-message-active');
        removeChildren(container);
        const matrix = createMatrix(10, 10);
        renderCell(matrix, container);
        handleCell(matrix);
        count = 0;
        changeMove(count);
        bombCount = 10;
        bombsCount.innerHTML = bombCount;
        container.classList.remove('container-blocked');
    }

    buttonRestart.addEventListener('click', handleButtonRestart);

    buttonSound.addEventListener('click', () => {
        gameClick.muted = !gameClick.muted;

        if (gameClick.muted) {
            buttonSound.setAttribute('data-sound-on', 'false');
        } else {
            buttonSound.removeAttribute('data-sound-on');
        }
    })
};

export default handleCell;
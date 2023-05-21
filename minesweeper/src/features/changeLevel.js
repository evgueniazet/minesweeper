import { createElement } from "./createElement";
import { crossIcon } from "../icons/crossIcon";
import { createMatrix } from "./createMatrix";
import { renderCell } from "./renderCell";
import handleCell from "./handleCell";
import { removeChildren } from "./removeChildren";

export const changeLevel = () => {

    const container = document.querySelector('.container');

    const chooseLevel = document.querySelector('.choose-level');
    const info = document.querySelector('.info');
    const infoWrapper = document.querySelector('.info-wrapper');

    const changeLevelWrapper = createElement('div', 'change-level-wrapper');
    info.appendChild(changeLevelWrapper);

    const easyLevelButton = createElement('button', 'level-button');
    changeLevelWrapper.appendChild(easyLevelButton);
    easyLevelButton.innerHTML = 'Easy level';

    const mediumLevelButton = createElement('button', 'level-button');
    changeLevelWrapper.appendChild(mediumLevelButton);
    mediumLevelButton.innerHTML = 'Medium level';

    const hardLevelButton = createElement('button', 'level-button');
    changeLevelWrapper.appendChild(hardLevelButton);
    hardLevelButton.innerHTML = 'Hard level';

    const closeButton = createElement('button', 'close-button');
    changeLevelWrapper.appendChild(closeButton);
    closeButton.innerHTML = crossIcon;

    const handleChooseLevel = () => {
        infoWrapper.classList.add('info-wrapper-inactive');
        changeLevelWrapper.classList.add('change-level-wrapper-active');
    }

    const handleCloseButton = () => {
        infoWrapper.classList.remove('info-wrapper-inactive');
        changeLevelWrapper.classList.remove('change-level-wrapper-active');
    }

    const handleEasyLevelButton = () => {
        removeChildren(container);
        const matrix = createMatrix(10, 10);
        renderCell(matrix, container);
        handleCell(matrix);
        container.classList.remove('container-medium');
        container.classList.remove('container-hard');
        container.classList.add('container');

    };

    const handleMediumLevelButton = () => {
        removeChildren(container);
        const matrix = createMatrix(15, 15);
        renderCell(matrix, container);
        handleCell(matrix);
        container.classList.remove('container-hard');
        container.classList.add('container-medium');
    };

    const handleHardLevelButton = () => {
        removeChildren(container);
        const matrix = createMatrix(25, 25);
        renderCell(matrix, container);
        handleCell(matrix);
        container.classList.remove('container-medium');
        container.classList.add('container-hard');
    };

    easyLevelButton.addEventListener('click', handleEasyLevelButton);
    mediumLevelButton.addEventListener('click', handleMediumLevelButton);
    hardLevelButton.addEventListener('click', handleHardLevelButton);
    closeButton.addEventListener('click', handleCloseButton);
    chooseLevel.addEventListener('click', handleChooseLevel);
}
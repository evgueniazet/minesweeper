import './styles/style.scss';
import handleCell from './features/handleCell';
import createInfo from './features/createInfo';
import { createElement } from './features/createElement';
import { renderCell } from './features/renderCell';
import { createMatrix } from './features/createMatrix';
import { timer } from './features/timer';

const addMinesweeper = () => {

    const body = document.querySelector('body');

    const title = createElement('h1', 'title');
    body.appendChild(title);
    title.append('Minesweeper');

    const contentWrapper = createElement('div', 'content-wrapper');
    body.appendChild(contentWrapper);

    createInfo();

    const container = createElement('section', 'container');
    contentWrapper.appendChild(container);

    const matrix = createMatrix(10, 10, 10);

    const buttonRestart = document.querySelectorAll('.button')[1];

    renderCell(matrix, container);
    handleCell(matrix);
    timer();

    const handleButtonRestart = () => {

        const containerChildren = container.children;

        Array.from(containerChildren).forEach(child => {
            container.removeChild(child);
        });

        const matrix = createMatrix(10, 10, 10);
        renderCell(matrix, container);
        handleCell(matrix);
    }

    buttonRestart.addEventListener('click', handleButtonRestart);
};

addMinesweeper();
import './styles/style.scss';
import handleCell from './features/handleCell';
import createInfo from './features/createInfo';
import { createElement } from './features/createElement';
import { renderCell } from './features/renderCell';
import { createMatrix } from './features/createMatrix';
import { timer } from './features/timer';
// import { removeChildren } from './features/removeChildren';
import { createFooter } from './features/createFooter';
import { changeLevel } from './features/changeLevel';
// import { toggleTheme } from './features/toggleTheme';


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

    const matrix = createMatrix(10, 10);

    createFooter();
    renderCell(matrix, container);
    handleCell(matrix);
    timer();
    changeLevel();
};

addMinesweeper();

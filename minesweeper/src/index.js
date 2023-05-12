import './styles/style.scss';
import handleCell from './features/handleCell';
import createInfo from './features/createInfo';

const addMinesweeper = () => {

    const body = document.querySelector('body');

    const title = document.createElement('h1');
    title.classList.add('title');
    body.appendChild(title);
    title.append('Minesweeper');

    const contentWrapper = document.createElement('div');
    contentWrapper.classList.add('content-wrapper');
    body.appendChild(contentWrapper);

    const container = document.createElement('section');
    container.classList.add('container');
    contentWrapper.appendChild(container);

    createInfo();

    const createMatrix = () => {
        const matrix = [];

        for (let i = 0; i < 10; i++) {
            const row = [];
            const randomIndex = Math.floor(Math.random() * 10);

            for (let k = 0; k < 10; k++) {
                if (k === randomIndex) {
                    row.push(2);
                } else {
                    row.push(1);
                }
            }
            matrix.push(row);
        }
        return matrix;
    };

    const matrix = createMatrix();

    const renderCell = (matrix) => {

        for (let i = 0; i < matrix.length; i++) {
            for (let j = 0; j < matrix[i].length; j++) {
                const cell = document.createElement('div');
                container.appendChild(cell);
                cell.classList.add('cell');
                if (matrix[i][j] === 2) {
                    // cell.classList.add('cell-lose');
                    cell.dataset.isLose = true;
                }
            }
        }


    };

    renderCell(matrix);

    handleCell();
};

addMinesweeper();

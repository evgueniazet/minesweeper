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


        const rows = 10;
        const cols = 10;
        const bombsCount = 10;

        let matrix = new Array(rows);

        for (let i = 0; i < rows; i++) {
            matrix[i] = new Array(cols).fill(0);
        }

        let bombsPlaced = 0;
        while (bombsPlaced < bombsCount) {
            const row = Math.floor(Math.random() * rows);
            const col = Math.floor(Math.random() * cols);

            if (matrix[row][col] === -1) {
                continue;
            }

            matrix[row][col] = -1;

            for (let i = row - 1; i <= row + 1; i++) {
                for (let j = col - 1; j <= col + 1; j++) {
                    if (i >= 0 && i < rows && j >= 0 && j < cols && matrix[i][j] !== -1) {
                        matrix[i][j]++;
                    }
                }
            }
            bombsPlaced++;
        }
        console.log(matrix);
        return matrix;
    };

    const matrix = createMatrix();

    const renderCell = (matrix) => {

        for (let i = 0; i < matrix.length; i++) {
            for (let j = 0; j < matrix[i].length; j++) {
                const cell = document.createElement('div');
                container.appendChild(cell);
                cell.classList.add('cell');
                if (matrix[i][j] === -1) {
                    cell.dataset.isLose = true;
                }
            }
        }
    };

    renderCell(matrix);
    handleCell();
};
addMinesweeper();





import { createElement } from "./createElement";

export const renderCell = (matrix, container) => {

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            const cell = createElement('button', 'cell');
            container.appendChild(cell);
            if (matrix[i][j] === -1) {
                cell.dataset.isLose = true;
            }
        }
    }
};
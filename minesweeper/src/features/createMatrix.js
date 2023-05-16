export const createMatrix = (rows, cols, bombCount) => {
    let matrix = new Array(rows).fill(0).map(() => new Array(cols).fill(0));

    for (let bombPlace = 0; bombPlace < bombCount; bombPlace++) {
        let row = 0;
        let col = 0;
        do {
            row = Math.floor(Math.random() * rows);
            col = Math.floor(Math.random() * cols);
        } while (matrix[row][col] === -1);

        matrix[row][col] = -1;

        for (let i = Math.max(0, row - 1); i <= Math.min(rows - 1, row + 1); i++) {
            for (let j = Math.max(0, col - 1); j <= Math.min(cols - 1, col + 1); j++) {
                if (matrix[i][j] !== -1) {
                    matrix[i][j]++;
                }
            }
        }
    }
    return matrix;
};
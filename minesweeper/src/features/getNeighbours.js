export const getNeighbours = (matrix, clickedIndex) => {
    const row = Math.floor(clickedIndex / matrix[0].length);
    const col = clickedIndex % matrix[0].length;
    const neighbors = [];

    for (let i = -1; i <= 1; i++) {
        for (let j = -1; j <= 1; j++) {
            if (i === 0 && j === 0) continue;
            const neighborRow = row + i;
            const neighborCol = col + j;
            if (
                neighborRow >= 0 &&
                neighborRow < matrix.length &&
                neighborCol >= 0 &&
                neighborCol < matrix[0].length
            ) {
                const neighborIndex = neighborRow * matrix[0].length + neighborCol;
                neighbors.push(neighborIndex);
            }
        }
    }
    return neighbors;
};
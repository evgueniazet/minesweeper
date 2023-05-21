export const createMinesweeperField = (newMatrix, bombCount, clickedIndex) => {
    const rows = newMatrix.length;
    const cols = newMatrix[0].length;
    let indexArr = [];

    const clickedRow = Math.floor(clickedIndex / cols);
    const clickedCol = clickedIndex % cols;

    for (let i = 0; i < rows * cols; i++) {
        indexArr.push(i);
    }

    indexArr.splice(clickedIndex, 1);
    const bombIndex = indexArr.sort(() => 0.5 - Math.random()).slice(0, bombCount);

    bombIndex.forEach((index) => {
        const row = Math.floor(index / cols);
        const col = index % cols;
        newMatrix[row][col] = 'bomb';
    });

    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            if (newMatrix[row][col] !== 'bomb') {
                let bombCount = 0;

                for (let i = -1; i <= 1; i++) {
                    for (let j = -1; j <= 1; j++) {
                        const neighborRow = row + i;
                        const neighborCol = col + j;

                        if (
                            neighborRow >= 0 &&
                            neighborRow < rows &&
                            neighborCol >= 0 &&
                            neighborCol < cols &&
                            newMatrix[neighborRow][neighborCol] === 'bomb'
                        ) {
                            bombCount++;
                        }
                    }
                }

                newMatrix[row][col] = bombCount;
            }
        }
    }

    if (newMatrix[clickedRow][clickedCol] === 'bomb') {
        let newBombRow, newBombCol;

        do {
            newBombRow = Math.floor(Math.random() * rows);
            newBombCol = Math.floor(Math.random() * cols);
        } while (newMatrix[newBombRow][newBombCol] === 'bomb');

        newMatrix[newBombRow][newBombCol] = 'bomb';
        newMatrix[clickedRow][clickedCol] = 0;
    }

    console.log('newMatrix', newMatrix);

    return newMatrix;
}

import { getNeighbors } from "./getNeighbours";

export const getEmptyCellArr = (index, matrix) => {

    const neighbors = getNeighbors(matrix, index);
    const flattenedArray = matrix.flat();
    const emptyCellArr = [];

    const pushZeroElem = (array) => {
        array.forEach((item) => {
            if (flattenedArray[item] === 0 && !emptyCellArr.includes(item)) {
                emptyCellArr.push(item);
                pushZeroElem(getNeighbors(matrix, item));
            }
        });
    };

    pushZeroElem(neighbors);
    return emptyCellArr;
};

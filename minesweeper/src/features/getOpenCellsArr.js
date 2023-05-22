import { getNeighbours } from "./getNeighbours";

export const getOpenCellsArr = (emptyCellArray, matrix) => {

    const flattenedArray = matrix.flat();
    let newArr = [];
    let resultArr = []

    emptyCellArray.forEach((elem) => {
        const neighbors = getNeighbours(matrix, elem);
        newArr.push(neighbors);
    })

    const newArrFlat = newArr.flat();

    const filterUniqueValues = (array) => {
        return array.filter((value, index, self) => {
            return self.indexOf(value) === index;
        });
    };

    const filteredArr = filterUniqueValues(newArrFlat);

    flattenedArray.forEach((elem, idx) => {

        filteredArr.forEach((i) => {

            if (i === idx && elem !== 'bomb') {

                resultArr.push(i);
            }
        })
    })

    return resultArr;
};


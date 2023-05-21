export const openCells = (arr, container) => {

    const childrenArray = Array.from(container.children);

    if (arr.length > 0) {

        childrenArray.forEach((elem, index) => {
            arr.forEach((item) => {
                if (item === index) {
                    elem.classList.add('cell-open');
                }
            })
        })
    }
};
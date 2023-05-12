const handleCell = () => {

    const cells = document.querySelectorAll('.cell');

    cells.forEach((cell) => {

        cell.addEventListener('click', () => {
            console.log('клик по ячейке');
            if (cell.hasAttribute('data-is-lose')) {
                cell.classList.add('cell-lose');
            }
        })
    })


};

export default handleCell;
import { iconLose } from "../icons/inocLose";
import { iconFlag } from "../icons/iconFlag";

const handleCell = () => {

    const cells = document.querySelectorAll('.cell');

    cells.forEach((cell) => {

        let isFlag = false;

        cell.addEventListener('click', () => {
            if (cell.hasAttribute('data-is-lose')) {
                cell.innerHTML = iconLose;
            }
        })

        cell.addEventListener('contextmenu', (e) => {
            e.preventDefault();

            if (!isFlag) {
                cell.innerHTML = iconFlag;
                isFlag = true;
            } else {
                const icon = cell.querySelector('.icon');
                cell.removeChild(icon);
                isFlag = false;
            }


        })
    })
};

export default handleCell;
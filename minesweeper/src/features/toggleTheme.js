import { darkTheme } from '../icons/darkTheme';
import { lightTheme } from '../icons/lightTheme';

export const toggleTheme = (container) => {

    const buttonTheme = document.querySelector('.theme');
    console.log('buttonTheme',buttonTheme);
    const childrenArray = Array.from(container.children);
    let isLight = true;

    const handleButtonTheme = () => {

        const icon = buttonTheme.querySelector('.icon');

        if (isLight) {
            buttonTheme.removeChild(icon);
            buttonTheme.innerHTML = darkTheme;
            isLight = false;
            childrenArray.forEach((cell) => {

                if (cell.classList.contains('cell-open')) {
                    cell.classList.add('cell-open-dark');
                } else {
                    cell.classList.add('cell-dark');
                }
            })
        } else {
            buttonTheme.removeChild(icon);
            buttonTheme.innerHTML = lightTheme;
            isLight = true;
            childrenArray.forEach((cell) => {
                cell.classList.remove('cell-dark');
            })
        }

    }
    buttonTheme.addEventListener('click', handleButtonTheme);
};
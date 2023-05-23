import { createElement } from "./createElement";
import { crossIcon } from "../icons/crossIcon";

export const createFooter = () => {

    const body = document.querySelector('body');
    const contentWrapper = document.querySelector('.content-wrapper');
    const footer = createElement('footer', 'footer');
    contentWrapper.appendChild(footer);

    // const gameOverMessage = createElement('span', 'gameover-message');
    // footer.appendChild(gameOverMessage);

    const resultsButton = createElement('button', 'results-button');
    footer.appendChild(resultsButton);
    resultsButton.innerHTML = 'Show results';

    const handleResultsButton = () => {
        contentWrapper.classList.add('content-wrapper-inactive');
        const results = createElement('div', 'results');
        body.appendChild(results);

        const resultsTitle = createElement('h2', 'results-title');
        results.appendChild(resultsTitle);
        resultsTitle.innerHTML = 'Results';

        const resultsList = createElement('ol', 'results-list');
        results.appendChild(resultsList);

        const resultsCloseButton = createElement('button', 'results-close-button');
        results.appendChild(resultsCloseButton);
        resultsCloseButton.innerHTML = crossIcon;

        const keys = Object.keys(localStorage);

        const storageContent = {};
        for (let i = 0; i < keys.length; i++) {
            const key = keys[i];
            const value = localStorage.getItem(key);
            storageContent[key] = value;
        }

        for (let key in storageContent) {
            if (storageContent.hasOwnProperty(key)) {
                const value = storageContent[key];
                const resultsListItem = createElement('li', 'results-list-item');
                resultsList.appendChild(resultsListItem);
                resultsListItem.innerHTML = `Time: ${key}sec, moves: ${value} `
            }
        }

        const handleResultsCloseButton = () => {
            results.classList.add('results-inactive');
            contentWrapper.classList.remove('content-wrapper-inactive');
        };

        resultsCloseButton.addEventListener('click', handleResultsCloseButton);

    };
    resultsButton.addEventListener('click', handleResultsButton);
};
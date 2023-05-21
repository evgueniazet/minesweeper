export const changeMove = (count) => {
    const move = document.querySelector('.move');
    const moveText = move.querySelector('.text');
    moveText.innerHTML = count;
};
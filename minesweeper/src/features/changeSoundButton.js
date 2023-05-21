import { soundOff } from "../icons/soundOff";
import { soundOn } from "../icons/soundOn";

export const changeSoundButton = () => {

    let isSoundOn = true;
    const soundButton = document.querySelector('.sound');

    soundButton.addEventListener('click', () => {

        if (isSoundOn) {
            isSoundOn = false;
            soundButton.innerHTML = soundOff;
        } else {
            isSoundOn = true;
            soundButton.innerHTML = soundOn;
        }
    })
};
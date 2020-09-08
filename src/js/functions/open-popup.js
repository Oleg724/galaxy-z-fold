import {checkTarget} from './check-target';

export const openPopup = () => {
    const $popup = document.querySelector('.js-popup');
    $popup.classList.add('active');
}
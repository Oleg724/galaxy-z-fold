export const closePopup = () => {
    const $popup = document.querySelector('.js-popup');
    $popup.classList.remove('active');
}
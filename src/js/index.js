import '../styles/styles.scss';
import {openPopup} from './functions/open-popup';
import {closePopup} from './functions/close-popup';
import {checkTarget} from './functions/check-target';
import {mask} from './functions/input-phone/mask';

const $body = document.querySelector('body');
const $closeBtn = document.querySelector('.js-close-btn');
const $telInput = document.querySelector('#tel');
const $form = document.querySelector('#form');
const $popupContent = document.querySelector('.js-popup-content');
const $popupInner = document.querySelector('.js-popup-inner');

const url = '/index.php?route=information/sendinfo/underorder';

const showMessage = (text) => {
    const $popupInner = document.querySelector('.js-popup-inner');
    $popupInner.style.display = 'none';
    $popupContent.classList.add('send');
    const $message = document.createElement('p');

    $message.id = 'message';
    $message.innerHTML = text;
    $popupContent.appendChild($message);
}

const hideMessage = () => {
    const $popupContent = document.querySelector('.registration-popup__content');
    const $message = $popupContent.querySelector('#message');

    $popupContent.removeChild($message);
    $popupContent.classList.remove('send');
    $popupInner.removeAttribute('style');
}

const showRegForm = () => {
    const $popupInner = document.querySelector('.js-popup-inner');
    $popupInner.style.display = 'flex';
}

openPopup();

$body.addEventListener('click', (e) => {
    const target = e.target;

    checkTarget(target, 'js-btn')
        ? openPopup()
        : null;
});

$form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const data = new FormData($form);

    async function loadJson() {
        let response = await fetch(url, {
            method: 'POST',
            body: data,
        });

        if (response.status == 200) {
            showMessage('Дякуємо за реєстрацію. Очікуйте дзвінок оператора.');

            const $message = $popupContent.querySelector('#message');

            setTimeout(() => {
                $popupContent.removeChild($message);
                $popupContent.classList.remove('send');

                const $popupInner = document.querySelector('.js-popup-inner');
                $popupInner.removeAttribute('style');

                closePopup();
            }, 3000);
        } else {
            showMessage('Вибачте за незручності. Спробуйте ще раз');

            setTimeout(() => {
                hideMessage();
                showRegForm();
                closePopup();
            }, 3000);
        }
    }

    loadJson().catch(() => {
        showMessage('Вибачте за незручності. Спробуйте ще раз');

        setTimeout(() => {
            hideMessage();
            showRegForm();
            closePopup();
        }, 3000);
    });
})

$closeBtn.addEventListener('click', () => {
    closePopup();
});

$telInput.addEventListener('input', (e) => {
    mask(e, $telInput);
});
import {cutLastChar} from './cut-last-char';

export const mask = (e, elem) => {
    const value = e.data;
    const length = elem.value.length;


    if (isNaN(value) || length > 18) {
        elem.value = cutLastChar(elem.value);
    }

    switch (length) {
        case 1:
            return elem.value = `+38(${value}`;
        case 7:
            return elem.value += `) `;
        case 12:
            return elem.value += `-`;
        case 15:
            return elem.value += `-`;
        case 18:
            return elem.value += '';
        default:
            return elem.value += '';
    }
}
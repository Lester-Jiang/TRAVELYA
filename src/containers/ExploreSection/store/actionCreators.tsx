import * as constants from './constants';

export const getOffsetTopAction = (id:string) =>({
    type: constants.SCROLL_DOWN_VALUE,
    value: document.getElementById(id)?.offsetTop
});
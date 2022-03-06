import * as constants from './constants';

const defaultState = {
    scrollDown: 0
}

const ExploreReducer =  (state:any = defaultState, action:any) => {
    switch(action.type){
        case constants.SCROLL_DOWN_VALUE:
            const newState = JSON.parse(JSON.stringify(state));
            newState.scrollDown = action.value;
            return newState;
    }

    console.log(state, action);
    return state
}

export default ExploreReducer;
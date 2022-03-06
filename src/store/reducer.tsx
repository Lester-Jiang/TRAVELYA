import { combineReducers } from 'redux-immutable';
import {reducer as exploreReducer} from '../containers/ExploreSection/store';

const reducer =  combineReducers({
    explore: exploreReducer
});

export default reducer;
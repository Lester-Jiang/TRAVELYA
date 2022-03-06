// import { createStore } from "redux";
// import reducer from "./reducer";

// const store = createStore(reducer, (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__());

// export default store;

import reducer from './reducer';
import * as actionCreators from './actionCreators';
import * as constants from './constants';

export {reducer, actionCreators, constants}
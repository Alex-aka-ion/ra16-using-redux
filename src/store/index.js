import serviceListReducer from "../reducers/ServiceList";
import serviceAddReducer from "../reducers/ServiceAdd";
import {combineReducers, createStore} from "redux";

const reducer = combineReducers({
    serviceList: serviceListReducer,
    serviceAdd: serviceAddReducer
})

const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export default store;

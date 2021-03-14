import {nanoid} from "nanoid";
import {ADD_SAVE_SERVICE, REMOVE_SERVICE} from "../actions/actionTypes";

const initialState = [
    {id: nanoid(), name: 'Замена стекла', price: 21000},
    {id: nanoid(), name: 'Замена дисплея', price: 25000},
];

export default function serviceListReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_SAVE_SERVICE:
            const {name, price, id} = action.payload;
            const oldState = state.filter(o => o.id !== id);
            return [...oldState, {id: id || nanoid(), name, price: Number(price)}];
        case REMOVE_SERVICE:
            return state.filter(service => service.id !== action.payload.id);
        default:
            return state;
    }
}

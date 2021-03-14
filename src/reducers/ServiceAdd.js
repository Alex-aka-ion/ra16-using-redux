import {CHANGE_SERVICE_FIELD, EDIT_SERVICE, RESET_FIELDS} from "../actions/actionTypes";

const initialState = {
    name: '',
    price: '',
    id: null
};

export default function serviceAddReducer(state = initialState, action) {
    switch (action.type) {
        case CHANGE_SERVICE_FIELD:
            const {name, value} = action.payload;
            return {...state, [name]: value};
        case RESET_FIELDS:
            return {...initialState};
        case EDIT_SERVICE:
            const {id, name: service_name, price} = action.payload;
            return {id, name: service_name, price};
        default:
            return state;
    }
}

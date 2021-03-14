import {
    ADD_SAVE_SERVICE, CHANGE_FILTER,
    CHANGE_SERVICE_FIELD,
    EDIT_SERVICE,
    REMOVE_SERVICE,
    RESET_FIELDS, RESET_FILTER,
} from "./actionTypes";

export function addSaveService(name, price, id) {
    return {type: ADD_SAVE_SERVICE, payload: {name, price, id}};
}

export function removeService(id) {
    return {type: REMOVE_SERVICE, payload: {id}};
}

export function changeServiceField(name, value) {
    return {type: CHANGE_SERVICE_FIELD, payload: {name, value}};
}

export function resetFields() {
    return {type: RESET_FIELDS};
}

export function editService(id, name, price) {
    return {type: EDIT_SERVICE, payload: {id, name, price}};
}

export function changeServiceFilter(value) {
    return {type: CHANGE_FILTER, payload: value};
}

export function resetFilter() {
    return {type: RESET_FILTER};
}

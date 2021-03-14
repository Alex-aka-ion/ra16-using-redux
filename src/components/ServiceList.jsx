import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {editService, removeService, resetFields} from "../actions/actionCreators";

export default function ServiceList() {
    const items = useSelector(state => state.serviceList);
    const dispatch = useDispatch();

    const handleRemove = id => {
        //dispatch({type: REMOVE_SERVICE, payload: id});
        dispatch(removeService(id));
        dispatch(resetFields());
    };

    const handleEdit = (id, name, price) => {
        dispatch(editService(id, name, price));
    }

    return (
        <ul>
            {items.map(o => <li key={o.id}>
                {o.name} {o.price}
                <button onClick={() => handleEdit(o.id, o.name, o.price)}>Edit</button>
                <button onClick={() => handleRemove(o.id)}>X</button>
            </li>)}
        </ul>
    );
}

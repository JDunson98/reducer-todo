import React, { useState } from 'react';
//import { initialState, reducer } from '../reducers/reducer';

const TodoForm = (props) => {
    const [form, setForm] = useState('');

    //const [state, dispatch] = useReducer(reducer, initialState);

    const handleChanges = e => {
        setForm(e.target.value);
    };

    const submitItem = e => {
        e.preventDefault();
        props.addTask(form)
        setForm('');
    }

    return (
        <form onSubmit={submitItem}>
            <label htmlFor="newTask">
                <input type='text' name="newTask" placeholder="Add a task" value={form} onChange={handleChanges} />
            </label>
            <button type="submit" /*onClick={() => dispatch({type: 'ADD_TASK', payload: ""})}*/>Add Task</button>
        </form>
    )
}

export default TodoForm;
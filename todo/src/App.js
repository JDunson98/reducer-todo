import React, { useReducer } from 'react';
import './App.css';
import { initialState, reducer } from './reducers/reducer';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(state);

  const addTask = (input) => {
    const newTask = {
      task: input,
      completed: false,
      id: Date.now()
    };
    dispatch({type:"ADD_TASK", payload: newTask})
  }

  const toggleComplete = (id) => {
    dispatch({type:"COMPLETE_TASK", payload: id})
  }

  const clearCompleted = () => {
    dispatch({type: "CLEAR_COMPLETED"})
  }

  return (
    <div className="App">
      <h1>My To-Do List</h1>
      <TodoForm addTask={addTask}  />
      <TodoList  state={state} toggleComplete={toggleComplete} />
      <button onClick={(e) => {
        e.preventDefault()
        clearCompleted()
      }}>Clear Completed</button>
    </div>
  );
}

export default App;

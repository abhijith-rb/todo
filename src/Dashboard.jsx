import React from 'react'
import './styles.css';

const Dashboard = ({ todos, setTodos }) => {

    const clearCompleted = () => {
        const inCompleteTodos = todos.filter(todo => !todo.completed)
        setTodos(inCompleteTodos);
    }

    return (
        <>
        <h1 id="header">Todo App</h1>
        <div className="dashboard">
            <span id="notification">{todos.filter(todo => !todo.completed).length} left to do</span>
            <button onClick={clearCompleted} id="clearBtn">Clear completed</button>
        </div>
        </>
    )
}

export default Dashboard
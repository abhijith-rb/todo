import React from 'react'

const Todo = ({ todo, toggleTodo, todos, setTodos }) => {
  const handleToggle = () => {
    toggleTodo(todo.id);
  }

  const deleteTodo = ()=>{
    const newTodos = todos.filter(t => t.id !== todo.id)
    setTodos(newTodos);
  }

  return (
    <>
    <div className='todo'>
      <div>
        <input type='checkbox' checked={todo.completed} onChange={handleToggle} name='checkInput' />
        {todo.name}

      </div>
      <button id='deltBtn' onClick={deleteTodo}>X</button>
    </div>
    </>
  )
}

export default Todo;
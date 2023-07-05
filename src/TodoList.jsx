import React, { useEffect, useRef } from 'react'
import Todo from './Todo'

const TodoList = ({ todos, setTodos }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    container.scrollTop = container.scrollHeight;
  }, [todos.length])

  const toggleTodo = (id) => {
    const newTodos = [...todos];
    const todo = newTodos.find(todo => todo.id === id);
    todo.completed = !todo.completed;
    setTodos(newTodos);
  }

  return (
    <div className="todo-container" ref={containerRef}>
      {todos.map((todo, i) => {
        return <Todo key={i} todo={todo} toggleTodo={toggleTodo} todos={todos} setTodos={setTodos}/>
      })}

    </div>
  )
}

export default TodoList
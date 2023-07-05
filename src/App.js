import { useEffect, useState } from "react";
import TodoList from "./TodoList";
import Dashboard from "./Dashboard";
import AddDiv from "./AddDiv";
import './styles.css'

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem('todos'))
    if (storedTodos) {
      setTodos(storedTodos)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  return (
    <div className="App">

      <Dashboard todos={todos} setTodos={setTodos}/>
      
      <TodoList todos={todos} setTodos={setTodos}/>

      <AddDiv todos={todos} setTodos={setTodos} />

    </div>
  );
}

export default App;

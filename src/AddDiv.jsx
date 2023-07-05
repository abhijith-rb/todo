import React, { useRef } from 'react';
import './styles.css';
import { v4 as uuidv4 } from "uuid";


const AddDiv = ({todos, setTodos }) => {
    const nameRef = useRef();

    const handleAddTodo = () => {
        const name = nameRef.current.value;
        if (name === '') return;

        const nameArray = todos.map((todo)=>{
            return todo.name;
        })

        if(nameArray.includes(name)){
            alert('This Todo already exists');
            nameRef.current.value = null;
            return;
        }

        setTodos(prevTodos => {
            return [...prevTodos, { id: uuidv4(), name: name, completed: false }]
        });
        nameRef.current.value = null;
    }
    return (
        <div className="addDiv">
            <input type="text" ref={nameRef} name="nameInput" id="inputField" placeholder="Add a task..." />
            <button onClick={handleAddTodo} id="addBtn">+</button>
        </div>
    )
}

export default AddDiv;
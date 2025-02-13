import React, { useState } from 'react'
import Button from './Button';
import TodoList from './TodoList';
import '../Style/InputBar.css'

const InputBar = () => {
    const [todo, setTodo] = useState("");
    const [todos, setTodos] = useState([]);
    // const [editText, setEditText] = useState("")


    const handleSubmit = (e) => {
        e.preventDefault();
        if (!todo.trim()) {
            alert("Enter Todo")
            return;
        }


        if (todos.find(item => item.text.toLowerCase() === todo.toLowerCase())) {
            alert("Item already exists in the list!");
            return;
        }

        // if (editText !== "") {
        //     const updatedTodo = todos.map((item, i) =>
        //         i === editText ? { ...item, text: todo } : item);
        //     setTodos(updatedTodo);
        //     setEditText("");
        // }
        // else {
        //     setTodos([...todos, { text: todo, completed: false }]);
        // }
        // setTodo("");
        setTodos([...todos, { text: todo, completed: false }]);
        setTodo("");

    }
    const handleCheck = (index) => {
        setTodos(todos.map((todo, i) => i === index ? { ...todo, completed: !todo.completed } : todo))
    }

    const handleEdit = (index, newText) => {
      setTodos(todos.map((todo, i)=>
    i=== index ? {...todo, text:newText}:todo
    ))
    }


    const handleDelete = (index) => {
        setTodos(todos.filter((_, i) => i !== index))
    }
    return (
        <div className='formData'>
            
            <form onSubmit={handleSubmit}>
            <h3 className='todo-heading'>Enter you Todo</h3>
               <div className='input-container'>
               <input
                    type="text"
                    placeholder='Type your Todo...'
                    value={todo}
                    id='todo'
                    className='todo'
                    onChange={(e) => setTodo(e.target.value)} />

                <Button value="Add" noClick={handleSubmit} />

               </div>
            </form>
            <div className='todo-list'>
                <TodoList todos={todos} handleEdit={handleEdit} handleDelete={handleDelete} handleCheck={handleCheck} />
            </div>
        </div>
    )
}

export default InputBar
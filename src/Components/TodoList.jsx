import React, { useState } from "react";
import "../Style/TodoList.css";

import checkIcon from "../../public/Image/check.png";
import deleteIcon from "../../public/Image/deleteIcon1.png";
import editIcon from "../../public/Image/editIcon.png";

const TodoList = ({ todos, handleEdit, handleDelete, handleCheck }) => {
    const [editIndex, setEditIndex] = useState("");
    const [editValue, setEditValue] = useState("");

    const handleEditClick = (index, text) => {
        setEditIndex(index);
        setEditValue(text);
    };

    const handleSaveEdit = (index) => {
        if (editValue.trim() === ""){
            alert("Add some text")
             return;
        }

        if (todos.find((item, i) => i !== index && item.text.toLowerCase() === editValue.toLowerCase())) {
            alert("Item already exists in the list!");
            setEditIndex("");

            return;
        }

        handleEdit(index, editValue);
        setEditIndex("");
    };

    return (
        <div className="list">
            <ul type="none">
                {todos.length > 0 ? (
                    todos.map((todo, index) => (
                        <li key={index}>
                            <div className="left-section">
                                <img
                                    src={checkIcon}
                                    alt="checkIcon"
                                    onClick={() => handleCheck(index)}
                                    className="checkicon"
                                />

                                {editIndex === index ? (
                                    <input
                                        type="text"
                                        value={editValue}
                                        onChange={(e) => setEditValue(e.target.value)}
                                        className="edit-input"
                                        autoFocus
                                    />
                                ) : (
                                    <span
                                        style={{
                                            textDecoration: todo.completed ? "line-through" : "none",
                                        }}
                                    >
                                        {todo.text}
                                    </span>
                                )}
                            </div>

                        
                            <div className="right-section">
                                {editIndex === index  ? (
                                 
                                    <img
                                        src={checkIcon}
                                        alt="checkIcon"
                                        onClick={() => handleSaveEdit(index)}
                                        className="checkicon"
                                    />
                                ) : (
                                    <img
                                        src={editIcon}
                                        alt="editIcon"
                                        onClick={() => handleEditClick(index, todo.text)}
                                        className="editicon"
                                    />
                                )}

                                <img
                                    src={deleteIcon}
                                    alt="deleteIcon"
                                    onClick={() => handleDelete(index)}
                                    className="deleteicon"
                                />
                            </div>
                        </li>
                    ))
                ) : (
                    <></>
                )}
            </ul>
        </div>
    );
};

export default TodoList;

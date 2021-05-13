import React from 'react';
import db from "./firebase";
import "./todo.css"

function Todo(props) {
    return (
        <div className="todo">
            <li className="list-item">{props.todo.task}</li>
            <button onClick={event=>db.collection("todos").doc(props.todo.id).delete()}>delete</button>
            
        </div>
    )
}

export default Todo


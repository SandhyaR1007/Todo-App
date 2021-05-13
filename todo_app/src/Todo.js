import React from 'react';
import { useState } from "react";
import db from "./firebase";
import "./todo.css";
import DeleteIcon from '@material-ui/icons/Delete';
import DoneIcon from '@material-ui/icons/Done';
import EditIcon from '@material-ui/icons/Edit';

function Todo(props) {
    const [isComplete,setComplete] = useState(false)
    const [modalDisplay,setModalDisplay] = useState(false)
    return (
        <>
        <div className={`${modalDisplay?"displayModal":"hideModal"}`}>this is a modal div</div>
        <div className="todo">
            <EditIcon className="btn" onClick={()=>setModalDisplay(true)}/>
            <li className={`${isComplete?"completed":""} list-item`}>{props.todo.task}</li>
            {/* <button onClick={event=>db.collection("todos").doc(props.todo.id).delete()}className="del-btn">delete</button> */}
            <div className="side-btns">
            <DoneIcon className="btn" onClick={()=>setComplete(!isComplete)}/>
            <DeleteIcon className="btn" onClick={event=>db.collection("todos").doc(props.todo.id).delete()}/>

            </div>
           
            
        </div>
        </>
    )
}

export default Todo


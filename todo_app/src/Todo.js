import React from 'react';
import { useState } from "react";
import db from "./firebase";
import "./todo.css";
import DeleteIcon from '@material-ui/icons/Delete';
import DoneIcon from '@material-ui/icons/Done';


function Todo(props) {
    const [isComplete,setComplete] = useState(false)
    const [toggle,setToggle] = useState(true)
    const [text,setText] = useState("")
    const handleChange = (e)=>{
        
        setText(e.target.value)
    }
    const submitHandler = (e)=>{
        e.preventDefault();
        db.collection("todos").doc(props.todo.id).set({
            task:text
            
        },{merge:true})
        setToggle(true)
        
    }
    const dblHandler = ()=>{
        setToggle(false)
        setText(props.todo.task)
    }
    
    return (
        <>
       
        <div className="todo">
            {
                toggle? (<li className={`${isComplete?"completed":""} list-item`} 
                onDoubleClick={dblHandler}>{props.todo.task}</li>)
                :
                (<>
                <form onSubmit={submitHandler}>
                <input type="text" value={text} onChange={handleChange}  />
                </form>
                
                </>)

            }
            
            
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


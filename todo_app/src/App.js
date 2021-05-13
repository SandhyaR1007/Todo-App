import './App.css';
import { useState, useEffect } from "react";
import Todo from "./Todo";
import db from "./firebase";
import firebase from "firebase";

function App() {
  const [todos,setTodos]=useState([]);
  const [input,setInput] = useState("");
  const addItem = (event)=>{
    event.preventDefault();
    // setTodos([...todos,input])
    db.collection('todos').add({
      task:input,
      timestamp : firebase.firestore.FieldValue.serverTimestamp() 
      // gives the timestamp of server
    })
    setInput("")

  }
  useEffect(()=>{
    db.collection('todos').orderBy('timestamp','desc').onSnapshot(snapshot=>{
      // console.log(snapshot.docs.map(doc=>({id:doc.id,task:doc.data().task})))
      setTodos(snapshot.docs.map(doc=>({id:doc.id, task:doc.data().task})))
    })
  }
  ,[])
  return (
    <div className="App">
      <h1>TODO APP</h1>
      <form className="main-form">
      <input value={input} onChange={event=>setInput(event.target.value)} className="input-area"/>
      <button type="submit" onClick={addItem} disabled={!input} className="add-btn">Add Item</button>
      </form>
      
      <ul className="todo-list">
        {
          todos.map(todo=>(
           <Todo todo={todo}/>
          ))
        }
      </ul>
     
      
    </div>
  );
}

export default App;

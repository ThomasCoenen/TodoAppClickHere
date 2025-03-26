import { useState, useEffect } from 'react';
import axios from "axios";
import styles from "./styles.module.css";
import Item from './Item';

function Todo() {

    const [text, setText] = useState("");
    const [todo, setTodo] = useState([]);
    const [isUpdating, setUpdating] = useState("");
    const [userEmail, setUserEmail] = useState("");

    useEffect(() => {
      const userEmail2 = localStorage.getItem('userEmail');
      console.log("userEmaillll", userEmail2)
      setUserEmail(userEmail2)
    })

    useEffect(() => {
      if(userEmail){
        axios.post("http://localhost:8080/api/todo/get-todo", {userEmail})
        .then((res) => setTodo(res.data))
        .catch((err) => console.log(err));
      }
    },[userEmail])


    const updateTodosList = () => {
      axios.post("http://localhost:8080/api/todo/get-todo", {userEmail})
        .then((res) => setTodo(res.data))
        .catch((err) => console.log(err));
    }
  
    const addUpdateTodo = () => {
  
      if (isUpdating === "") {
        console.log("addingTodo")
        axios.post("http://localhost:8080/api/todo/save-todo", { text, userEmail })
          .then((res) => {
            console.log(res.data);
            setText("");
            updateTodosList()
          })
          .catch((err) => console.log(err));
      }else{
        console.log("updatingTodo")
        axios.post("http://localhost:8080/api/todo/update-todo", { _id: isUpdating, text })
          .then((res) => {
            console.log(res.data);
            setText("");
            setUpdating("");
            updateTodosList()
          })
          .catch((err) => console.log(err));
      }
    }
  
    const deleteTodo = (_id) => {
      axios.post("http://localhost:8080/api/todo/delete-todo", { _id })
        .then(
          (res) => {
            console.log(res.data)
            updateTodosList()
          }
        )
        .catch((err) => console.log(err));
    }
  
    const updateTodo = (_id, text) => {
      setUpdating(_id);
      setText(text);
    }
  
    return (
      <div className={styles.App}>


        {userEmail && (

          <div className={styles.container}>
            <div className={styles.top}>
              <input
                type="text"
                placeholder='Write Something...'
                value={text}
                onChange={(e) => setText(e.target.value)} />
              <div className={styles.add}
                onClick={addUpdateTodo}>{isUpdating ? "Update" : "Add"}</div>
            </div>
    
            <div className={styles.list}>
              {todo.map(item => <Item
                key={item._id}
                text={item.text}
                remove={() => deleteTodo(item._id)}
                update={() => updateTodo(item._id, item.text)} />)}
            </div>
  
          </div>
        )}
      </div>
    );
  }
  
  export default Todo;
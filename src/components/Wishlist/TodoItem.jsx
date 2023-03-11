import React from 'react'
import { MdOutlineDangerous } from "react-icons/md";



export default function TodoItem({todo , onComplete , onDeleteItem,filterTodos}) {
  
    const getStyle = () =>{
        return {
            textDecoration: todo.completed ? 'line-through' : 'none' ,
            margin: "20px",
            color: "white",
            border: "1px solid #ffffff",
            backgroundColor: "#282c34",
        }
    }
    const onChangeHandler = () =>{
      onComplete(todo.id)
    }
  return (
    <li style={getStyle()}>
        <input type='checkbox' checked = {todo.completed}
        onChange={onChangeHandler}/>
        {todo.task}
        <span className='delete-btn' onClick={() => onDeleteItem(todo.id)}><MdOutlineDangerous/></span>
    </li>
  )
}

import React, { useState } from 'react'
import data from "../../data/datawishlist.json";
import TodoList from './TodoList';
import "./list.css";
import TodoForm from './TodoForm';


export const List = () => {
  const [todos, setTodos] = useState(data)

  const onComplete = (id) => {
    setTodos(todos.map((todo) => {
      return todo.id === Number(id) ? {...todo, completed: !todo.completed} : {...todo};
  }))
  }

  const onDeleteItem = (id) =>{
    setTodos([...todos].filter(todo => todo.id !== id))
  }

  const addTodo = (newTodo) => {
    let newWish = {id : +new Date(), task:newTodo, completed:false};

    setTodos([...todos,newWish])
  }

  return (
    <div className="container">
      <TodoForm addTodo = {addTodo}/>
      <TodoList todos={todos} onComplete={onComplete} onDeleteItem={onDeleteItem}/>
    </div>
  )
}

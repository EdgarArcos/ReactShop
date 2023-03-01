import React, { useEffect, useState } from 'react'
import TodoList from './TodoList';
import "./list.css";
import TodoForm from './TodoForm';
import { v4 as uuidv4 } from 'uuid';

export const List = () => {
  const [todos, setTodos] = useState(JSON.parse(localStorage.getItem("todos"))||[])

  const onComplete = (id) => {
    setTodos(todos.map((todo) => {
      return todo.id === (id) ? {...todo, completed: !todo.completed} : {...todo};
  }))
  }
  const filterTodos = () =>{
    let filteredSiTrue = [...todos].filter(todo => todo.completed === true)
    const filteredNoTrue = [...todos].filter(todo => todo.completed !== true)
    console.log("si true",filteredSiTrue);
    console.log("no true",filteredNoTrue);
  }
  const onDeleteItem = (id) =>{
    setTodos([...todos].filter(todo => todo.id !== id))
  }

  const addTodo = (newTodo) => {
    let newWish = {id : uuidv4(), task:newTodo, completed:false};
    setTodos([...todos,newWish])
  }

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  },[todos])
  return (
    <div className="container">
      <TodoForm addTodo = {addTodo}/>
      <TodoList todos={todos} onComplete={onComplete} onDeleteItem={onDeleteItem} filterTodos={filterTodos}/>
    </div>
  )
}

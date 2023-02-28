import React, { useEffect, useState } from 'react'
import TodoList from './TodoList';
import "./list.css";
import TodoForm from './TodoForm';


export const List = () => {
  const [todos, setTodos] = useState(JSON.parse(localStorage.getItem("todos"))||[])

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

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  },[todos])

  return (
    <div className="container">
      <TodoForm addTodo = {addTodo}/>
      <TodoList todos={todos} onComplete={onComplete} onDeleteItem={onDeleteItem}/>
    </div>
  )
}

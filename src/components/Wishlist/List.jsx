import React, { useEffect, useState } from 'react'
import TodoList from './TodoList';
import "./list.css";
import TodoForm from './TodoForm';

export const List = () => {
  const [todos, setTodos] = useState(JSON.parse(localStorage.getItem("todos"))||[])
  const [todosCompleted, setTodosCompleted] = useState([])

  const onComplete = (id) => {
    setTodos(todos.map((todo) => {
      return todo.id === Number(id) ? {...todo, completed: !todo.completed} : {...todo};
  }))
  }
  const filterTodos = () =>{
    let filteredSiTrue = [...todos].filter(todo => todo.completed === true)
    const filteredNoTrue = [...todos].filter(todo => todo.completed !== true)
    setTodosCompleted(filteredSiTrue)
    console.log(filteredSiTrue);
    console.log("no true",filteredNoTrue);
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
      <TodoList todos={todos} onComplete={onComplete} onDeleteItem={onDeleteItem} filterTodos={filterTodos}/>
    </div>
  )
}

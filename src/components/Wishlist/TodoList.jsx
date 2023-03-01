import React from 'react'
import TodoItem from './TodoItem';

export default function TodoList({onComplete,todos, onDeleteItem,filterTodos}) {

  
  return (

    <ul className='todolist'>
        {
            todos.map((todo, id) =>(
                <TodoItem key = {id} todo= {todo} onComplete={onComplete} onDeleteItem={onDeleteItem} filterTodos={filterTodos}  />
            ))
        }
    </ul>
  )
}


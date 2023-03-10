import React, { useState } from 'react'

export default function TodoForm({addTodo}) {
    const [userInput , setUserInput] = useState("Introducir Wish")

    const handleOnChange = (e) => {
        setUserInput(e.currentTarget.value)
    }
    const handleSubmit = (e) =>{
        e.preventDefault();
        if (userInput.trim() !== "") {
            addTodo(userInput);
            setUserInput("")
        }
    }
    return (
    <div>
        <form onSubmit = {handleSubmit}>
            <input type="text"  placeholder="Add todo" onChange = {handleOnChange}/>
            <button>Add todo</button>
        </form>
    </div>
    )
}

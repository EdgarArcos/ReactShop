//import React, { useState } from "react"
//import { v4 as uuidv4 } from 'uuid';
//import  buttonCreateUser  from "./buttonCreateUser";
export default function PageRegister() {
  //const [user,setUser] = useState()

  // const addUser = (newUser) => {
  //   let newUser = {id : uuidv4(), name:newUser, contraseña:false};
  //   setUser([...user,newUser])
  // }
  return (
    <div>
        <p>UserName</p>
        <input type = "UserName" name= "UserName" placeholder='Introduzca su UserName'/>
        <p>Contraseña</p>
        <input type= "Password" name= "password" placeholder='Introduzca su Contraseña'/>
        <buttonCreateUser/>
    </div>
  )
}

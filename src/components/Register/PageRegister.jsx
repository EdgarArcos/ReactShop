import React from 'react'

export default function PageRegister() {
  return (
    <div>
        <p>UserName</p>
        <input type = "UserName" name= "UserName" placeholder='Introduzca su UserName'/>
        <p>Contraseña</p>
        <input type= "Password" name= "password" placeholder='Introduzca su Contraseña'/>
        <p>Correo</p>
        <input type= "Correo" name= "Correo" placeholder='Introduzca su Correo'/>
    </div>
  )
}

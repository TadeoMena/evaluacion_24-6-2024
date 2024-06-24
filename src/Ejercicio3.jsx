import React from 'react'
import ElementoLista from './ElementoLista'

export default function Ejercicio3() {
  return (
    <div>
      <h2>Ejercicio 3: Modularización</h2>
      <p>Algunas materias de quinto año:</p>
      <ul>
        <ElementoLista mensaje="Informática Aplicada II" />
        <ElementoLista mensaje="Programación II" />
        <ElementoLista mensaje="Robótica" />
        <ElementoLista mensaje="Matemática" />
        <ElementoLista mensaje="Física" />
      </ul>
    </div>
  )
}
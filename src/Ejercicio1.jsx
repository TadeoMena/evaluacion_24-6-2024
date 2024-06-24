import {useState} from "react"
import {handleSelect} from "react"

export default function Ejercicio1() {
  const [selectedFruit, setSelectedFruit] = useState('')
  return (
    <div>
      <h2>Ejercicio 1: Lista desplegable</h2>

      <label>Seleccione una fruta: </label>
      <select value={selectedFruit} onChange={handleSelect}>
        <option value="Ninguna seleccionada">Seleccione una fruta</option>
        <option value="Manzana">Manzana</option>
        <option value="Pera">Pera</option>
        <option value="Naranja">Naranja</option>
        <option value="Mandarina">Mandarina</option>
      </select>
      <p>La fruta seleccionada actualmente es: {selectedFruit}</p>
    </div>
  )
}
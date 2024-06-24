import {useState} from "react"

export default function Ejercicio2() {
  const [formData, setFormData] = useState({name:'', age: 0})
  const [message, setMessage] = useState('')

  const handleInputChange = (event) => {
    const {name, value} = event.target
    setFormData({...formData, [name]:value})
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const {name, age} = formData
    setMessage(`${name} tiene ${age} años`)
    if (age >= 18) {
      setMessage((prevMessage) => prevMessage + `\nLa persona ingresada es mayor de edad`)
    } else {
      setMessage((prevMessage) => prevMessage + `\nLa persona ingresada es menor de edad`)
    }
  }

  return (
    <div>
      <h2>Ejercicio 2: Formulario</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Nombre:
          <input type="text" name="name" value={formData.name} onChange={handleInputChange} />
        </label>
        <br />
        <label>
          Edad:
          <input type="number" name="age" value={formData.age} onChange={handleInputChange} />
        </label>
        <button type="submit">Enviar</button>
      </form>
      <p>{message}</p>
    </div>
  )
}

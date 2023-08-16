import React from 'react'
import { useState } from 'react'

const Form = ({doctor}) => {

    const [paciente, setPaciente] = useState(
        {
            nombre:'',
            obraSocial:''
        }
    )

    const [enviado, setEnviado] = useState (false)
    const [error, setError] = useState(false)
    console.log(paciente)

    const handleSubmit = () => {
        if (paciente.nombre.length > 3 && paciente.obraSocial.length > 2)

       { setEnviado(true)
        setError(false)
    }
       else {
        setError(true)
       }
    }
  return (
    <div>
        <h3>Sacar turno con {doctor.nombre}</h3>
        <label>Nombre del paciente</label>
        <input type='text' onChange={(e) => setPaciente({...paciente, nombre: e.target.value})}/>
        <label> Obra social</label>
        <input type='text' onChange= {(e) => setPaciente({...paciente, obraSocial: e.target.value})}/>
        <button onClick={handleSubmit}>Enviar</button>
        {enviado && <h3> Sacaste turno para el dia tal</h3>}
        {error && <h3 style={{color: 'red'}}> Por favor llene todos los campos</h3> }
    </div>
  )
}

export default Form
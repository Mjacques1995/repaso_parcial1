import React from 'react'

const Card = ({medico, setTurno}) => {
  return (
    <div style= {{display: 'flex', justifyContent: 'center'}}>
        <h3 style={{marginRight: 20}}>{medico.nombre}</h3>
        <h4 style={{marginRight: 20}}>{medico.especializacion}</h4>
        <button onClick = {() => setTurno({doctor: medico, form: true})}>Sacar turno</button>
        
      </div> )
    }

export default Card
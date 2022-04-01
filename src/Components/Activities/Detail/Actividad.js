import React from 'react'
import Title from '../../Title/Title'
const Actividad = ({ titulo, descripcion }) => {
    return (
        <div>
            <Title title={titulo} />
            <p>{descripcion}</p>
        </div>
    )
}

export default Actividad
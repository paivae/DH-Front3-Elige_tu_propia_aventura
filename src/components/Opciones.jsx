import React from 'react'

const Opciones = ({opcion = {}, clickOpcion}) => {
  return (
    <div className="opciones">
        <div className="opcion">
            <button className="botones" onClick={()=> clickOpcion('A')}>A</button>
            <h2>{opcion.a ? opcion.a : ''}</h2>
        </div>
        <div className="opcion">
            <button className="botones" onClick={()=> clickOpcion('B')}>B</button>
            <h2>{opcion.b ? opcion.b : ''}</h2>
        </div>
    </div>
  )
}

export default Opciones
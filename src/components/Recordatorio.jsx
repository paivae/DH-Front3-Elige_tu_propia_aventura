import React from "react";

const Recordatorio = ({ opcAnteriores, ultimaOpcion }) => {
  
  return (
    <div className="recordatorio">
      <h3>Selección anterior: {ultimaOpcion}</h3>
      <h4>Historial de opciones elegidas:</h4>
      <ul>
        {opcAnteriores.map((opcion, index) => {
          return <li key={`recordatorio-id-${index}`}>{opcion}</li>;
        })}
      </ul>
    </div>
  );
};

export default Recordatorio;

import React, { Component } from "react";
import Opciones from "../components/Opciones";
import Recordatorio from "../components/Recordatorio";
import getData from "../database/";

import "../styles/default.css";

class App extends Component {
  state = {
    opcionNumero: 1,
    opcionLetra: "", // La opcion que se eligio
    opcionesAnteriores: new Array(), // Se guardan los datos que van eligiendo
    aventura: {}, // Opcion que trae de la "base de datos"
    gameOver: false, // Establece cundo el juego acaba
  };

  constructor(props) {
    super(props);
    this.actualizarAventura();

    // Bindeando
    this.eventoClickOpciones = this.eventoClickOpciones.bind(this);
  }

  actualizarAventura() {
    let historia = getData(
      this.state.opcionNumero + this.state.opcionLetra.toLocaleLowerCase()
    );

    let gameover =
      historia.opciones.a == "FIN." || historia.opciones.a == "FIN"
        ? true
        : false;
        
    this.setState({
      aventura: historia,
      gameOver: gameover,
    });
  }

  eventoClickOpciones(opcion) {
    // Validando si sigue o no el cuento
    if (this.state.gameOver) {
      alert("Muchas gracias por Jugar!");
    } else {
      // Temporal de las opciones actuales
      let opciones = this.state.opcionesAnteriores;
      // Agregando la nueva letra de la letras que ya estaba elegida
      if (this.state.opcionLetra != "") {
        opciones.push(this.state.opcionLetra);
      }
      // Guardando el nuevo valor en el estado
      this.setState(
        {
          opcionNumero: this.state.opcionNumero + 1,
          opcionLetra: opcion,
          opcionesAnteriores: opciones,
        },
        this.actualizarAventura
      );
    }
  }

  componentDidMount() {
    this.actualizarAventura();
  }

  render() {
    return (
      <div className="layout">
        <h2 className="historia">{this.state.aventura.historia}</h2>
        <Opciones
          opcion={this.state.aventura.opciones}
          clickOpcion={this.eventoClickOpciones}
        />
        <Recordatorio
          opcAnteriores={this.state.opcionesAnteriores}
          ultimaOpcion={this.state.opcionLetra}
        />
      </div>
    );
  }
}

export default App;

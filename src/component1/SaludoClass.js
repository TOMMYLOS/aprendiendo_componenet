import React from "react";

class Bienvenido extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nombre: this.props.nombre
    };
  }
  render() {
    return <h2>Bienvenido a un componente de Clase {this.state.nombre}</h2>;
  }
}

export default Bienvenido;

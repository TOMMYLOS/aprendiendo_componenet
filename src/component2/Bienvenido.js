import React from "react";

class Bienvenido extends React.Component {
  constructor(props) {
    super(props);
    console.log(this);
    this.state = {
      nombre: this.props.nombre || "Tommy",
      apellido: "Torres",
      correo: "torresurban@gmail.com",
      edad: 36,
      pais: "Peru",
      ciudad: "Lima"
    };
  }
  getFullDates = () => {
    const { pais, ciudad } = this.state;
    return pais + "-" + ciudad;
  };
  render() {
    const { correo, edad } = this.state;
    return (
      <div>
        Hola {this.state.nombre} {this.state.apellido}
        <br />
        Su correo es {correo} y la edad actual es {edad} años.
        <br />
        Vive en {this.getFullDates()}
      </div>
    );
  }
}

export default Bienvenido;

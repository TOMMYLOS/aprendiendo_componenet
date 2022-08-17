import React from "react";

class Estado extends React.Component {
  constructor(props) {
    super(props);
    console.log(constructor);
    this.state = {
      nombre: "Tommy"
    };
  }

  componentDidMount() {
    console.log("componentDidMount");
    this.setState({ nombre: "Gaby-SamySamy" });
  }

  componentDidUpdate() {
    console.log("componentDidUpdate");
  }

  componentWillUnmount() {
    console.log("componentWillUnmount");
  }

  render() {
    const nombre = this.state.nombre;
    return (
      <div>
        <h2>Estados</h2>
        <h3>{nombre}</h3>
      </div>
    );
  }
}

export default Estado;

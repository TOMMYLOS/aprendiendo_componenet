import Bienvenido from "./component1/SaludoClass";
import Saludo from "./component1/SaludoFuncional";
import "./styles.css";

export default function App() {
  const datosPersona = {
    nombre: "SamySamy",
    apellido: "Locuras"
  };

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <Saludo nombre={"Cami"} apellido={"Osita"} />
      <Bienvenido nombre="Osa" />
      <Saludo {...datosPersona} />
    </div>
  );
}

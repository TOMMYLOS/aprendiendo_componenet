import React, { useState, useEffect } from "react";

const Effect = () => {
  const [contador, setContador] = useState(0);
  const [color, setColor] = useState("cyan");
  const [click, setClick] = useState(false);

  useEffect(() => {
    document.title = "Contado" + contador;

    function mouseMove(e) {
      if (e.clientX < window.innerWidth / 2) {
        setColor("cyan");
      } else {
        setColor(`magenta`);
      }
    }
    window.addEventListener("mousemove", mouseMove);
    console.log("Ejecutando");

    return () => {
      console.log("Limpiando");
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  const handleClick = () => {
    setClick(true);
  };

  return (
    <div>
      <h1>El contadot es: {contador}</h1>
      <button
        onClick={() => setContador(contador + 1)}
        style={{ background: color }}
        onClick={handleClick}
      >
        Aumentar
      </button>
      {click && <h2>Hizo Click</h2>}
    </div>
  );
};

export default Effect;

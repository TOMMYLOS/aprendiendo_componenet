import React, { useState } from "react";

const jsonNombres = [
  {
    key: 1,
    nombre: "Gaby"
  },
  {
    key: 2,
    nombre: "Cami"
  },
  {
    key: 3,
    nombre: "Ying"
  }
];

const Listado = () => {
  return (
        <div>
          Listado
          {
            jsonNombres.map((v,index) => {
              return(
                <div>
                  <p>{v.nombre}</p>
                </div>
              )
            })
          }
        </div>)
};

export default Listado;

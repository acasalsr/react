import "./App.css";
import { useState } from "react";

export default function App() {
  /* 
Route Map.
1. Fer un contador -> servirà per comprovar SI el click % === 0
2. Crear un index per saber on el usuari ha clicat. 
3. onClick -> guardar el valor del lloc clicat i assigar aquest al "setElement" 

Problemes.
1. Com puc fer que un array amb valor a dins no es pugui substitur? [...game]? 
*/
  //onClick => comprovar si "primer click "

  const game = ["", "", "", "", "", "", "", "", ""];
  return (
    <>
      <div className="wrapper-tres-en-ratlla">
        {game.map((grid) => (
          <div className="container_tres-en-ratlla"></div>
        ))}
      </div>
    </>
  );
}

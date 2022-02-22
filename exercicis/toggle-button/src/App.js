import "./App.css";
import { useState } from "react";

/*
Mostrar 1 botó
En prémer el botó, canviar el color del botó
En prémer de nou el botó, treure el color del botó
Següents clics repliquen 2,3,2,3,2,3...
Mostrar un text a sota dient si està premut o no
*/

export default function App() {
  const [textPremut, setTextPremut] = useState("No està premut");
  const [color, setColor] = useState("");
  const swapElements = () => {
    textPremut === "No està premut"
      ? setTextPremut("Està premut")
      : setTextPremut("No està premut");
    swapColor();
  };

  const swapColor = () => {
    textPremut === "Està premut" ? setColor("button-color") : setColor("");
  };

  return (
    <>
      <button onClick={swapElements} className={color}>
        Click on me!
      </button>
      <h3>{textPremut === "Està premut" ? "Està premut" : "No està premut"}</h3>
    </>
  );
}

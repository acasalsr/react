import { useState } from "react";
import "./App.css";

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

export default function App() {
  const [antic, setAntic] = useState(0);
  const [operacio, setOperacio] = useState("");
  const [display, setDisplay] = useState(0);
  const entraOperacio = () => {
    setAntic(display);
    setOperacio("+");
  };
  const calcular = () => {
    if (operacio === "+") {
      setDisplay(antic + display);
    }
  };
  return (
    <>
      <div>
        ({antic}), {operacio} {display}
      </div>
      <br />
      {numeros.map((numero) => (
        <button onClick={() => setDisplay(numero)}>{numero}</button>
      ))}
      <br />
      <button onClick={entraOperacio}>+</button>
      <button onClick={calcular}>=</button>
    </>
  );
}

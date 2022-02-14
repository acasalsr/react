import { useState } from "react";
import "./App.css";

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

export default function App() {
  const [antic, setAntic] = useState(0);
  const [operacio, setOperacio] = useState("");
  const [display, setDisplay] = useState(0);
  const [novaEntrada, setNovaEntrada] = useState(false);
  const entraOperacio = (operacio) => {
    setNovaEntrada(true);
    setAntic(display);
    if (!novaEntrada) calcular();
    setOperacio(operacio);
  };
  const calcular = () => {
    if (operacio === "+") setDisplay(antic + display);
    if (operacio === "-") setDisplay(antic - display);
  };
  const entrarNumero = (numero) => {
    if (novaEntrada === true) setDisplay(numero);
    else setDisplay(display * 10 + numero);
    setNovaEntrada(false);
  };
  return (
    <>
      <div>{display}</div>
      <br />
      {numeros.map((numero) => (
        <button onClick={() => entrarNumero(numero)}>{numero}</button>
      ))}
      <br />
      <button onClick={() => entraOperacio("+")}>+</button>
      <button onClick={() => entraOperacio("-")}>-</button>
      <br />
      <button onClick={calcular}>=</button>
    </>
  );
}
